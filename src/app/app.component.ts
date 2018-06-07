import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private dialledNumber: string;
  ngOnInit(): void {
    this.dialledNumber = 'dsfs';
  }

  private touchPadButtonClicked(event) {
    console.log('event: ', event.path[0].innerText);
  }

}
