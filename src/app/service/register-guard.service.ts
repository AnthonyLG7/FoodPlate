import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardService implements CanActivate {

  currentUser: User;

  constructor(private userService: UserService, public router: Router) { 
  }

  canActivate(): boolean {
    this.currentUser = this.userService.getUser();
    if (this.currentUser.registered === false) {
      this.router.navigate(['register']);
      alert(`You haven't registered yet! You will be redireted to the register page`);
      return false;
    }
    return true;
  }
  
}
