import { Component, OnInit } from '@angular/core';

interface callElement {
  id: string,
  totCalls: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private mainButtonDisabled: boolean;
  private mainButtonEnabled: boolean;
  private mainButtonDial: boolean;
  private mainButtonHangup: boolean;
  private mainDialButtonClickedState: boolean;
  private mainHangupButtonClickedState: boolean;
  private dialledNumber: string;
  private button1Clicked: boolean;
  private button2Clicked: boolean;
  private button3Clicked: boolean;
  private button4Clicked: boolean;
  private button5Clicked: boolean;
  private button6Clicked: boolean;
  private button7Clicked: boolean;
  private button8Clicked: boolean;
  private button9Clicked: boolean;
  private buttonStarClicked: boolean;
  private button0Clicked: boolean;
  private buttonHashClicked: boolean;
  private mainButtonText: string;
  private showDialler: boolean;
  private timePassed: string;
  private timeCounter: any;
  private showCallTime: boolean;
  private callsArray: Array<callElement>;
  ngOnInit(): void {
    this.initialiseDialler();
  }

  private initialiseDialler(): void {
    this.callsArray = [];
    this.timePassed = '00';
    this.showDialler = true;
    this.mainButtonText = 'Dial';
    this.mainButtonEnabled = false;
    this.mainButtonDisabled = true;
    this.mainButtonDial = false;
    this.mainButtonHangup = false;
    this.mainDialButtonClickedState = false;
    this.mainHangupButtonClickedState = false;
    this.dialledNumber = '';
    this.initialiseTouchpad();
    this.showCallTime = false;
  }
  private initialiseTouchpad(): void {
    this.button1Clicked = false;
    this.button2Clicked = false;
    this.button3Clicked = false;
    this.button4Clicked = false;
    this.button5Clicked = false;
    this.button6Clicked = false;
    this.button7Clicked = false;
    this.button8Clicked = false;
    this.button9Clicked = false;
    this.buttonStarClicked = false;
    this.button0Clicked = false;
    this.buttonHashClicked = false;
  }
  private startCall(): void {
    this.showCallTime = true;
    let counter: number = 0;
    this.timeCounter = setInterval(() => {
      counter++;
      this.timePassed = counter < 10 ? `0${counter}` : `10`;
      if (counter === 10) this.terminateCall();
    }, 1000)
  }
  private terminateCall(): void {
    if (this.timeCounter) {
      clearInterval(this.timeCounter);
      this.timeCounter = null;
    }
    this.showDialler = true;
    this.mainHangupButtonClickedState = false;
    this.mainButtonHangup = false;
    this.mainButtonEnabled = false;
    this.mainButtonDisabled = true;
    this.mainButtonText = 'Dial';
    this.dialledNumber = '';
    this.showCallTime = false;
    this.timePassed = '00';
  }
  private addCall(): void {
const newElement: callElement = {
  id: this.dialledNumber,
  totCalls: 1
}


    if (this.callsArray.length === 0) {
      this.callsArray.push(newElement)
    } else {
      const elementIndex: number = this.callsArray.findIndex((element: callElement): boolean => element.id === this.dialledNumber);
      elementIndex > -1 ? this.callsArray[elementIndex].totCalls++ : this.callsArray.push(newElement)
    }
  }
  private mainButtonClicked(event: any): void {
    const mainButtonClickValue: any = event.path[0].innerText[0]
    switch (mainButtonClickValue) {
      case 'D':
        this.mainDialButtonClickedState = true;
        this.addCall();
        setTimeout(() => {
          this.showDialler = false;
          this.mainDialButtonClickedState = false;
          this.mainButtonDial = false;
          this.mainButtonHangup = true;
          this.mainButtonText = 'Hangup';
          this.startCall();
        }, 100);
        break;
      case 'H':
        this.mainHangupButtonClickedState = true;
        clearInterval(this.timeCounter)
        setTimeout(() => {
          this.terminateCall();
        }, 100);
        break;
      default:
        throw ('app.component - mainButtonClicked() error');
    }
  }

  private touchPadButtonClicked(event: any): void {
    const clickedButton: any = event.path[0].innerText[0];
    this.dialledNumber = this.dialledNumber + clickedButton;
    this.mainButtonDisabled = false;
    this.mainButtonEnabled = true;
    this.mainButtonDial = true;
    switch (clickedButton) {
      case '1':
        this.button1Clicked = true;
        break;
      case '2':
        this.button2Clicked = true;
        break;
      case '3':
        this.button3Clicked = true;
        break;
      case '4':
        this.button4Clicked = true;
        break;
      case '5':
        this.button5Clicked = true;
        break;
      case '6':
        this.button6Clicked = true;
        break;
      case '7':
        this.button7Clicked = true;
        break;
      case '8':
        this.button8Clicked = true;
        break;
      case '9':
        this.button9Clicked = true;
        break;
      case '*':
        this.buttonStarClicked = true;
        break;
      case '0':
        this.button0Clicked = true;
        break;
      case '#':
        this.buttonHashClicked = true;
        break;
      default:
        throw ('app.component - touchPadButtonClicked() error');
    }
    setTimeout(() => {
      this.initialiseTouchpad();
    }, 500);
  }

}
