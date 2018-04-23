import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test-data-table',
  templateUrl: './test-data-table.component.html',
  styleUrls: ['./test-data-table.component.css']
})
export class TestDataTableComponent implements OnInit {

  dataSource: MyDataSource | null;

  dataSubject = new BehaviorSubject<any[]>([]);

  displayedColumns = ['firstName'];

  data = [
    { firstName: 'Mike' },
    { firstName: 'Amy' },
    { firstName: 'Jillian' },
    { firstName: 'Juliette' }
  ];

  constructor() {
    this.dataSubject.next(this.data);
  }

  ngOnInit() {
    this.dataSource = new MyDataSource(this.dataSubject);
  }

  addData(){
    this.data.push({ firstName: 'Juliette111' });
    this.dataSubject.next(this.data);
  }
}

export class MyDataSource extends DataSource<any[]> {

  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }

  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }

  disconnect (  ): void {

  }

}