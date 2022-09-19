import { Component, OnInit } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  authenticated = false;
  constructor(private keycloakService: KeycloakService) {
  }
  ngOnInit(): void {
    this.checkAuth().then((authenticated) => {
      if (!authenticated && !this.authenticated) {
        console.log("authenticated", authenticated);
        this.keycloakService.login({
          redirectUri: window.location.origin,
        });
        this.authenticated = true;
      } else {
        console.log(this.keycloakService.getToken());
      }
    });

    // console.log(    this.keycloakService.isLoggedIn()
    // )
  }
  async checkAuth() {
    return this.keycloakService.isLoggedIn();
  }
  title = "my-app";
}
