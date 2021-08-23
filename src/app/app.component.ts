import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/assets/code-snippets/User';
import { UserService } from './service/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  user: User;
  constructor(private titleService: Title, private userService: UserService) {}
  

  ngOnInit(): void {
    this.titleService.setTitle("Welcome to FoodPlate");
    this.user = this.userService.getUser();
  }

}
