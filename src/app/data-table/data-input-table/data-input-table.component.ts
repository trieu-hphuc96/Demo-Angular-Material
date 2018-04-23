import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTable, DataSource } from '@angular/cdk/table';
import { MatTable, MatTableDataSource, MatRadioChange } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Element, ELEMENT_DATA } from '../element-data';

export type TrackByStrategy = 'position' | 'reference' | 'index';

@Component({
  selector: 'app-data-input-table',
  templateUrl: './data-input-table.component.html',
  styleUrls: ['./data-input-table.component.css']
})
export class DataInputTableComponent implements OnInit {

  ngOnInit(){}

  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];

  inputType: 'source' | 'stream' | 'array' | null = 'array';
  data = ELEMENT_DATA;
  matTableDataSource = new MatTableDataSource(this.data);

  trackByStrategy: TrackByStrategy = 'reference';
  trackBy = (index: number, item: Element) => {
    switch (this.trackByStrategy) {
      case 'position': return item.position;
      case 'reference': return item;
      case 'index': return index;
    }
  }

  dataSource: DataSource<Element> | Observable<Element[]> | Element[] | null = this.data;

  @ViewChild(CdkTable) cdkTable: CdkTable<Element>;
  @ViewChild(MatTable) matTable: MatTable<Element>;

  changeInput(e: MatRadioChange) {
    this.inputType = e.value;
    switch (this.inputType) {
      case 'array': this.dataSource = this.data; break;
      case 'stream': this.dataSource = this.matTableDataSource.connect(); break;
      case 'source': this.dataSource = this.matTableDataSource; break;
    }
  }

  addRow() {
    this.data.push({
      name: 'new',
      weight: Math.floor(Math.random() * 25),
      symbol: 'New',
      position: Math.floor(Math.random() * 25)
    });

    this.matTableDataSource.data = this.data;
  }

  shuffle() {
    let dataToShuffle = this.data.slice();
    let currentIndex = dataToShuffle.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = dataToShuffle[currentIndex];
      dataToShuffle[currentIndex] = dataToShuffle[randomIndex];
      dataToShuffle[randomIndex] = temp;
    }

    this.data = dataToShuffle;
    this.matTableDataSource.data = dataToShuffle;
  }

  removeRow() {
    this.data.pop();
    this.matTableDataSource.data = this.data;
  }

  reassignDataClone() {
    this.data = this.data.slice();

    if (this.dataSource instanceof Array) {
      this.dataSource = this.data;
    }
    this.matTableDataSource.data = this.data;
  }

  renderRows() {
    //this.cdkTable.renderRows();
    this.matTable.renderRows();
  }

  removeDataSource() {
    this.dataSource = null;
    this.inputType = null;
  }

  highlightFirstRow() {
    document.querySelector('mat-table mat-row')!.setAttribute('style', 'background: red');
  }

}
