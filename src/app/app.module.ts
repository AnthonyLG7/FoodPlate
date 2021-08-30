import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import { PlateComponent } from './plate/plate.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { AppRoutingModule } from './app-routing.module';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodComponent } from './food/food.component';



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, MainComponent, HomeBtnComponent, PlateComponent, MessageComponent, NavComponent, RegisterComponent, DefaultComponent, ExercisesComponent, FarmersMarketsComponent, TodaysGoalComponent, FoodComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FoodGroupsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
