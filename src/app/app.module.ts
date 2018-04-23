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
  MatSlideToggleModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatStepperModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule
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
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './layout/grid-list/grid-list.component';
import { ListComponent } from './layout/list/list.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { ButtonComponent } from './buttons-indicators/button/button.component';
import { ButtonToggleComponent } from './buttons-indicators/button-toggle/button-toggle.component';
import { ChipsComponent } from './buttons-indicators/chips/chips.component';
import { ProgressSpinnerComponent } from './buttons-indicators/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './buttons-indicators/progress-bar/progress-bar.component';
import { DialogComponent, DialogOverviewExampleDialog } from './popups-and-modals/dialog/dialog.component';
import { SnackbarComponent, PizzaPartyComponent } from './popups-and-modals/snackbar/snackbar.component';
import { TooltipComponent } from './popups-and-modals/tooltip/tooltip.component';


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
    SliderToggleComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    DialogOverviewExampleDialog,//for dialog
    SnackbarComponent,
    PizzaPartyComponent,//for snackbar
    TooltipComponent
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
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    //end need for Angular Material
    ScrollToModule.forRoot() //for scrolling to element
  ],

  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'}, //globally format date for mat datepicker to VN date 
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}, // for instantly show errors when the input is dirty and invalid
    MediaMatcher
  ],

  bootstrap: [AppComponent],

  entryComponents: [
    DialogOverviewExampleDialog,
    PizzaPartyComponent
  ]

})
export class AppModule { }
