import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'fp-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.css']
})
export class HomeBtnComponent implements OnInit {
  //@Input() user;

  currentUser: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

}
