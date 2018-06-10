# Dialler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Overview

The project is made of three main files in src/app which are app.component.css, app.component.html and app.component.ts

app.component.ts contains the class AppComponent that implements the OnInit lifecycle Angular module.

When the component is initiated all global variables are also initiated. The user can dial a number only after having selected at least a value, then the "Dial" button is available to be clicked.

When clicked the template containings the buttons is turned off and the call simulation can start.

The simulated call goes on for ten seconds (using setInterval()) or can be terminated with the main button that is now red and shows the "hangup" text.

When the call is terminated a report regarding the calls made is shown for two seconds before the dialler is taken back to its original state.

The interesting point of the apps are:

Use of template literals - this.timePassed = counter < 10 ? `0${counter}` : `10`;

setInterval() is cleared when necessary - clearInterval(this.timeCounter);
use of findIndex() - const elementIndex: number = this.callsArray.findIndex((element: callElement): boolean => element.id === this.dialledNumber);

the use of the ternary operator - elementIndex > -1 ? this.callsArray[elementIndex].totCalls++ : this.callsArray.push(newElement);

the use of .sort() composed with .slice() to create the array of the three most called numbers - this.mostCalledArrayElements = this.callsArray.sort(function (a, b) { return (a.totCalls > b.totCalls) ? 1 : ((b.totCalls > a.totCalls) ? -1 : 0); }).slice(0, 3);

the use of .map() composed with .reduce() to evaluate the sum of all calls ever made - this.totalCallsEver = this.callsArray.map(item => item.totCalls).reduce((prev, next) => prev + next);


