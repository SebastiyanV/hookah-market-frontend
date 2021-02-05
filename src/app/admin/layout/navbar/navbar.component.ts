import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {IUser} from '../../../shared/interface/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  get currentUsername(): string {
    const currentUser: IUser = this.authService.getCurrentUser();
    return currentUser.firstName + ' ' + currentUser.lastName;
  }
}
