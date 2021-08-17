import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer  } from "@angular/platform-browser";
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Customer Info', url: '/customerinfo', icon: 'paper-plane' },
    { title: 'Login', url: '/register', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuthenticated: any;
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public auth: AuthService) {
    this.matIconRegistry.addSvgIcon(
      "email",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/social_email.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/social_linkedin2.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/social_github.svg")
    );

    auth.isUserAuthenicated().then((res) => {
      this.isAuthenticated = res.isUserLoggedIn;
    });
  }

  logout(){
    this.auth.doLogOut();
  }
}
