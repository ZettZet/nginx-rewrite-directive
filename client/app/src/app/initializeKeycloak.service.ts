import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    console.log(1);
    return keycloak.init({
      config: {
        url: "http://localhost:90/auth",
        realm: "realm_label",
        clientId: "client_id_label",
      },
      initOptions: {
        pkceMethod: "S256",
        // must match to the configured value in keycloak
        redirectUri: "http://localhost:80/",
        checkLoginIframe: false,
      },
    }).then((value) => {
      console.log(value);
      setInterval(() => {
        console.log(keycloak.updateToken().then((v) => console.log(v)));
      }, 5000);
    });
  };
}
