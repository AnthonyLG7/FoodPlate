import { Injectable, Optional } from '@angular/core';
import { User } from 'src/assets/code-snippets/User';
import { UserStatusService } from './user-status.service';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(1,'', '', '', '', {}, {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, false, '');

  currentUser = new BehaviorSubject<User>(this.user);
  getUser(): User {
    if (localStorage.getItem('currentUser')) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = new BehaviorSubject(user);
      return user;
    } else {
      this.user.reqsStatus.fruitMet = true;
      return this.user;
    }
  }

  updateUser(user: User) {
    user.id = 1;
    user.registered = true;
    user.reqsStatus = {fruitMet: true, vegMet: false, proteinMet: false, grainMet: false};
    this.currentUser.next(user);
  }

  static storeUserLocal(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  constructor(@Optional() private userStatusService: UserStatusService) { 
    if (this.userStatusService) {
      this.userStatusService.getUserStatus(this.user);
    }
  }
}
