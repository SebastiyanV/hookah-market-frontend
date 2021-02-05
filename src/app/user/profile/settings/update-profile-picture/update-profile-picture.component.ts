import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {AuthService} from '../../../../service/auth.service';
import {TokenService} from '../../../../service/token.service';
import {IUser} from '../../../../shared/interface/IUser';

@Component({
  selector: 'app-update-profile-picture',
  templateUrl: './update-profile-picture.component.html',
  styleUrls: ['./update-profile-picture.component.css']
})
export class UpdateProfilePictureComponent implements OnInit {
  uploadedImage: any;
  currentProfileImage: any;
  @ViewChild('fileUpload') imageUploadInput;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.currentProfileImage = this.authService.getCurrentUser().profilePicture;
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('profilePicture', this.uploadedImage, this.uploadedImage.name);
    this.userService.updateProfilePicture(formData)
      .subscribe(
        data => {
          let user: IUser = this.tokenService.getUser();
          // @ts-ignore
          user.profilePicture = data.profilePicture;
          this.tokenService.saveUser(user);
        },
        error => console.log(error)
      );
  }

  uploadFile($event: Event) {
    this.uploadedImage = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    reader.onload = (e: any) => {
      this.imageUploadInput.nativeElement.src = e.target.result;
    };
  }

  deleteCurrentProfilePicture() {
    this.userService.deleteProfilePicture()
      .subscribe(
        data => {
          let user: IUser = this.tokenService.getUser();
          user.profilePicture = null;
          this.tokenService.saveUser(user);
          this.currentProfileImage = null;
        },
        error => console.log(error)
      );
  }
}
