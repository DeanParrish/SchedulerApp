import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment as env } from '../environments/environment';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';  

import { CustomergridComponent } from './components/customergrid/customergrid.component';
import { RegisterfirebaseComponent } from './components/registerfirebase/registerfirebase.component';

import { LoginlinkComponent } from './elements/loginlink/loginlink.component';
import { LogoutlinkComponent } from './elements/logoutlink/logoutlink.component';


@NgModule({
  declarations: [AppComponent,
    CustomergridComponent,
    RegisterfirebaseComponent,
    LoginlinkComponent,
    LogoutlinkComponent,
    ],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(env.firebase),
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
