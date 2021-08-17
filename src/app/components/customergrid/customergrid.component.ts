import { Component, OnInit } from '@angular/core';
import {  MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from './../../services/authservice.service';
import { CustomerDataService } from './../../services/customer-data.service';

@Component({
  selector: 'app-customergrid',
  templateUrl: './customergrid.component.html',
  styleUrls: ['./customergrid.component.scss'],
})
export class CustomergridComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber1'];
  isAuthorized = false;
  peopleSource = new MatTableDataSource();
  allData = new MatTableDataSource();
  constructor(public customerService: CustomerDataService,
    private auth: AuthService) { }

  ngOnInit() {
    this.customerService.getCustomer()
    .subscribe(res=> {
      if(res.status == 200){
        this.isAuthorized = true;
        this.peopleSource = new MatTableDataSource(res.data)
        this.allData = new MatTableDataSource(res.data)
      }else if(res.status == 403){
        "Hello forbidden";
      } 
    }, err => {
      this.handleErrors(err);
    });
  }

  handleErrors(err){
    if(err.status === 403){
      this.auth.isUserAuthenicated().then(res => {
        if(res.isUserLoggedIn == true){
          this.auth.updateUserToken().then(res => {
            if(res.updated == true){
              this.ngOnInit();
            }
          })
        }
      })
    } 
}

}
