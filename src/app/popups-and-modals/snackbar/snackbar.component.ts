import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1200,
    });
  }

  ngOnInit(){}

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snackbar-content.component.html',
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class PizzaPartyComponent {}