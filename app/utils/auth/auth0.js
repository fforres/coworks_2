/* ===== ./src/utils/AuthService.js ===== */
import Auth0Lock from 'auth0-lock';
import config from 'utils/config';

const authLock = new Auth0Lock(config.auth0.clientId, config.auth0.clientDomain, {
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

authLock.on('authenticated', (authResult) => {
  localStorage.setItem('AUTH0_DATA', JSON.stringify(authResult));
});

export default {
  show() {
    authLock.show();
  },
};
