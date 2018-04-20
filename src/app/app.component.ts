import { Component, ViewChild, ElementRef } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showFormControls = false;
  showNavigation = false;
  showButtonsAndIndicators = false;

  constructor() {
  }
}
