import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatAutocompleteModule, 
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MAT_CHECKBOX_CLICK_ACTION,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatSliderModule,
  MatSlideToggleModule
 } from '@angular/material/';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './form-controls/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './form-controls/checkbox/checkbox.component';
import { DatepickerComponent } from './form-controls/datepicker/datepicker.component';
import { FormFieldComponent } from './form-controls/form-field/form-field.component';
import { RadioButtonComponent } from './form-controls/radio-button/radio-button.component';
import { SelectComponent } from './form-controls/select/select.component';
import { SliderComponent } from './form-controls/slider/slider.component';
import { SliderToggleComponent } from './form-controls/slider-toggle/slider-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    //need for Angular Material
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SliderToggleComponent
    //end need for Angular Material
  ],
  imports: [
    BrowserModule,
    //need for Angular Material
    FormsModule, // for form html
    ReactiveFormsModule, // have to add if want to use FormModule
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, // need for use mat datepicker
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule
    //end need for Angular Material
  ],

  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'}, //change format for datepicker
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} // for instantly show errors when the input is dirty and invalid
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
