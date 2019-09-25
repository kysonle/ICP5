import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorICP';
  mainScreen = '';
  operator = '';
  calString = '';
  result = false;
  opSet = false;
  operand1: number;
  operand2: number;

  // clear the screen when press AC button
  clearDisplay() {
    this.mainScreen = '';
    this.opSet = false;
}
  // Check for the operands
  enterButton(button: string) {
  if (button === '*' || button === '/' || button === '+' || button === '-') {
    const lastButton = this.mainScreen[this.mainScreen.length - 1];
    if (lastButton === '*' || lastButton === '/' || lastButton === '+' || lastButton === '-')  {
      this.opSet = true;
    }
    if ((this.opSet) || (this.mainScreen === '')) {
      return;
    }
    this.operand1 = parseFloat(this.mainScreen);
    this.operator = button;
    this.opSet = true;
  }
  this.mainScreen += button;
  }
  // set operator of 2 operands and get a results
  getResult() {
    this.calString = this.mainScreen;
    this.operand2 = parseFloat(this.mainScreen.split(this.operator)[1]);
    if (this.operator === '/') {
      this.mainScreen = (this.operand1 / this.operand2).toString();
    } else if (this.operator === '*') {
      this.mainScreen = (this.operand1 * this.operand2).toString();
    } else if (this.operator === '+') {
      this.mainScreen = (this.operand1 + this.operand2).toString();
    } else if (this.operator === '-') {
      this.mainScreen = (this.operand1 - this.operand2).toString();
    }
    this.result = true;
  }

}
