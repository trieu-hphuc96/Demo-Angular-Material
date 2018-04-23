import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputTableComponent } from './data-input-table.component';

describe('DataInputTableComponent', () => {
  let component: DataInputTableComponent;
  let fixture: ComponentFixture<DataInputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataInputTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
