import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl: FormControl = new FormControl();
  
  options = [
    'One',
    'Two',
    'Three'
   ];

   filteredOptions: Observable<string[]>;

   ngOnInit() {
     this.filteredOptions = this.myControl.valueChanges
       .pipe(
         startWith(''),
         map(val => this.filter(val))
       );
   }
 
   filter(val: string): string[] {
     return this.options.filter(option =>
       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
   }

}
