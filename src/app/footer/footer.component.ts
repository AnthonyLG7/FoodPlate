import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../service/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  versionString: string = "1.0.0";
  versionNumber: number = this.convertVerStringToNumber(this.versionString);
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = true;
  subscription: Subscription;
  goal: any;

  moreInfo() {
    alert('for more info see choosemyplate.gov');
  }

  constructor(private todaysGoalSvce: TodaysGoalService) { 
    this.subscription = this.todaysGoalSvce.getGoal().subscribe(goal =>{
      this.goal = goal
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private convertVerStringToNumber(version:string) {
    return parseInt(version.split('.').join(''),2);
  }

}
