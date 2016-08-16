/* ===== ./src/utils/AuthService.js ===== */
import Auth0Lock from 'auth0-lock';
import config from 'utils/config';

export default class AuthService {
  constructor() {
    // Configure Auth0
    this.lock = new Auth0Lock(config.auth0.clientId, config.auth0.clientDomain, {});
      // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this.doAuthentication.bind(this));
      // binds login functions to keep this context
    this.login = this.login.bind(this);
  }

  doAuthentication(authResult) {
    // Saves the user token
    console.log(authResult);
    debugger;
    this.setToken(authResult.idToken);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }
}
