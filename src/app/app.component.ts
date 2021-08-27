import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/assets/code-snippets/User';
import { Requirements } from './models/requirements';
import { RequirementsService } from './service/requirements.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  //user: User;
  currentUser: User;
  private requirements: Array<Requirements>;

  constructor(private titleService: Title, private userService: UserService, private reqsService: RequirementsService) {}
  

  ngOnInit(): void {
    this.titleService.setTitle("Welcome to FoodPlate");
    //this.user = this.userService.getUser();
    this.userService.getUser();
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.reqsService.getRequirements().subscribe(
      reqs => {
        this.requirements = reqs;
        console.table(this.requirements);
        console.log(this.requirements[1].ageGroup);
      }
    )
  }

}
