/* ===== ./src/utils/AuthService.js ===== */
import Auth0Lock from 'auth0-lock';
import config from 'utils/config';

export default class AuthService {
  constructor() {
    // Configure Auth0
    this.lock = new Auth0Lock(config.auth0.clientId, config.auth0.clientDomain, {
      popup: true,
      auth: {
        redirectUrl: config.auth0.redirectUrl,
        responseType: 'token',
        sso: true,
        params: {
          scope: 'openid email', // Learn about scopes: https://auth0.com/docs/scopes
        },
      },
    });
      // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this.doAuthentication);
      // binds login functions to keep this context
    this.doAuthentication = this.doAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile(idToken) {
    return new Promise((resolve, reject) => {
      this.lock.getProfile(idToken, (err, profile) => {
        if (!err) {
          resolve(profile);
        } else {
          reject(err);
        }
      });
    });
  }

  doAuthentication(authResult) {
    // Saves the user token
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
