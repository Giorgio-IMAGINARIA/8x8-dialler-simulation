import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    this.initialiseDialler();
  }

  private initialiseDialler(): void {
    this.mainButtonEnabled = false;
    this.mainButtonDisabled = true;
    this.mainButtonDial = false;
    this.mainButtonHangup = false;
    this.mainDialButtonClickedState = false;
    this.dialledNumber = '';
    this.initialiseTouchpad();
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
  private mainButtonClicked(event: any): void {
    const mainButtonClickValue: any = event.path[0].innerText[0]
    switch (mainButtonClickValue) {
      case 'D':
        this.mainDialButtonClickedState = true;
        setTimeout(() => {
          this.mainDialButtonClickedState = false;
          this.mainButtonHangup = true;
        }, 200);
        break;
      case 'H':
        this.mainDialButtonClickedState = false;
        setTimeout(() => {
          this.mainDialButtonClickedState = false;
        }, 200);
        break;
      default:
        throw ('app.component - mainButtonClicked() error');
    }

    this.mainDialButtonClickedState = true;
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
