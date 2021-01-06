import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../service/auth.service';
import {IUser} from '../../../../shared/interface/IUser';
import {UserService} from '../../../../service/user.service';
import {FILL_ALL_FIELDS_CORRECTLY, SOMETHING_GONE_WRONG, UPDATE_PROFILE_MESSAGE, UPDATE_PROFILE_TITLE} from 'src/app/shared/constant/error.constant';
import {ToastrService} from 'ngx-toastr';
import {TOASTR_OPTIONS} from '../../../../shared/constant/application.properties';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  errors: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.errors = [];
  }

  ngOnInit(): void {
    const currentUser: IUser = this.authService.getCurrentUser();

    this.editProfileForm = this.formBuilder.group({
      firstName: [currentUser.firstName, [Validators.required]],
      lastName: [currentUser.lastName],
      phoneNumber: [currentUser.phoneNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
    });
  }

  onSubmit(): void {
    this.errors = [];

    if (this.editProfileForm.valid) {
      this.userService.editProfile(this.editProfileForm.value)
        .subscribe(
          data => {
            this.toastr.info(UPDATE_PROFILE_MESSAGE, UPDATE_PROFILE_TITLE, TOASTR_OPTIONS);
          },
          error => {
            this.toastr.error(SOMETHING_GONE_WRONG, UPDATE_PROFILE_TITLE, TOASTR_OPTIONS);
          }
        );

    } else {
      this.errors.push(FILL_ALL_FIELDS_CORRECTLY);
    }

  }


  get firstName(): any {
    return this.editProfileForm.get('firstName');
  }

  get lastName(): any {
    return this.editProfileForm.get('lastName');
  }

  get phoneNumber(): any {
    return this.editProfileForm.get('phoneNumber');
  }
}
