import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versionString: string = "1.0.0";
  versionNumber: number = this.convertVerStringToNumber(this.versionString);
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = true;

  moreInfo() {
    alert('for more info see choosemyplate.gov');
  }

  constructor() { }

  ngOnInit(): void {
  }

  private convertVerStringToNumber(version:string) {
    return parseInt(version.split('.').join(''),2);
  }

}
