import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  CHANGE_PASSWORD_MESSAGE,
  CHANGE_PASSWORD_TITLE,
  FILL_ALL_FIELDS_CORRECTLY,
  PASSWORDS_DONT_MATCH
} from '../../../../shared/constant/error.constant';
import {UserService} from '../../../../service/user.service';
import {ToastrService} from 'ngx-toastr';
import {TOASTR_OPTIONS} from '../../../../shared/constant/application.properties';
import {Router} from '@angular/router';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  errors: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.errors = [];
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['123123', [Validators.required, Validators.minLength(6)]],
      newPassword: ['321321', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['321321', [Validators.required, Validators.minLength(6)]],
    });
  }

  get currentPassword(): any {
    return this.changePasswordForm.get('currentPassword');
  }

  get newPassword(): any {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmNewPassword(): any {
    return this.changePasswordForm.get('confirmNewPassword');
  }

  onSubmit(): any {
    this.errors = [];
    if (this.changePasswordForm.valid) {
      if (this.newPassword.value === this.confirmNewPassword.value) {
        this.userService.changePassword(this.changePasswordForm.value).subscribe(
          data => {
            this.router.navigateByUrl('')
              .then(() => {
                this.authService.logout();
                this.toastr.info(CHANGE_PASSWORD_MESSAGE, CHANGE_PASSWORD_TITLE, TOASTR_OPTIONS);
              });
          },
          error => {
            this.errors.push(error.error.message);
          }
        );
      } else {
        this.errors.push(PASSWORDS_DONT_MATCH);
      }
    } else {
      this.errors.push(FILL_ALL_FIELDS_CORRECTLY);
    }
  }
}
