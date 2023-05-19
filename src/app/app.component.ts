import { Component } from '@angular/core';
import { MasterService } from './service/master.service';
import { Customer } from './Model/Customer';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-table';

  customerList!: Customer[];
  dataSource: any;
  displayedColumns: string[] = ['code', 'name', 'phone', 'email', 'status'];

  constructor(private service: MasterService) {
    this.service.GetCustomer().subscribe((res) => {
      this.customerList = res;

      this.dataSource = new MatTableDataSource<Customer>(this.customerList);
    });
  }
}
