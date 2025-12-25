import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/models/user.model';
import { MaterialModule } from "../../../shared/material/material-module";
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-user-list',
  imports: [MaterialModule,RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements AfterViewInit {
@ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private auth:AuthService) {}

displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'password',
    'role',
    'phone',
    'actions'
  ];

  dataSource = new MatTableDataSource<User>([]);

 ngOnInit()
 {
   this.auth.getUsers().subscribe(data=>{
    this.dataSource.data = data;
   });
   
 }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(row: User) {
    console.log('Edit', row);
  }

  delete(row: User) {
    console.log('Delete', row);
  }
}
