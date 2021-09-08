import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Goal } from '../models/Goal';
import { GoalsService } from '../service/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  goal: Goal;
  allGoals;
  errorMessage: string;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalForm = false;

  showEditGoalForm(goal: Goal): void {
    this.newGoalForm = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  showAddGoalForm(): void {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  showGoalAddEditForm(showForm: boolean): void {
    this.newGoalForm = showForm;
  }

  toggleGoalComplete(goal: Goal): void {
    goal.didIt = !goal.didIt;
  }

  resetGoalForm(): void {
    this.goalForm.reset();
  }

  createForm(): void {
    this.goalForm = this.formBuilder.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    })
  }

  getGoal(id): void {
    this.goalService.getGoalById(id)
      .subscribe(goal => this.goalRetrieved(goal),
      error => console.log(error))
  }

  goalRetrieved(goal): void {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      deadline: this.goal.dealine,
      didIt: this.goal.didIt,
      goalTitle: this.goal.goalTitle
    })
  }



  constructor(private formBuilder: FormBuilder, private goalService: GoalsService) { }

  ngOnInit(): void {
    this.createForm();
    this.goalService.getGoals()
      .subscribe((res: any) => {
        this.allGoals = res;
        console.log(this.allGoals);
        this.isLoading = false;
      },
      err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
        this.isLoading = false;
      });
  }

}
