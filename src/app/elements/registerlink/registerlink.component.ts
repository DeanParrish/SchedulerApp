import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RegisterfirebaseComponent } from 'src/app/components/registerfirebase/registerfirebase.component';

@Component({
  selector: 'app-registerlink',
  templateUrl: './registerlink.component.html',
  styleUrls: ['./registerlink.component.scss'],
})
export class RegisterlinkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  doRegister(){
    let dialogRef = this.dialog.open(RegisterfirebaseComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
