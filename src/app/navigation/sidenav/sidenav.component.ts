import { Component, OnInit, ChangeDetectorRef, ElementRef, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  events = [];

  showFiller = false;

  options: FormGroup;

  mobileQuery: MediaQueryList;

  fillerNav = Array(20).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(50).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  @Output() topOfPage = new EventEmitter<boolean>();
  showResponsiveForMobile = false;

  constructor(
    fb: FormBuilder,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    // for custom position of sidenav
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });

    // for responsive
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  changeShowResponsiveForMobile() {
    this.showResponsiveForMobile = !this.showResponsiveForMobile;

    if (this.showResponsiveForMobile) {
      //scroll to top smoothly
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  }
}
