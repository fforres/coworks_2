import { take, call, put, fork } from 'redux-saga/effects';
import { LOGIN_FACEBOOK, LOGIN_TWITTER, LOGIN_AUTH0 } from './constants';
import { startLogin, loginSuccess, loginError } from './actions';
import AuthService from 'utils/auth/class';
const auth = new AuthService();

export function* succesfulLogin(data) {
  yield put(loginSuccess(data));
}

// Individual exports for testing
export function* startLoginWithFacebook() {
  // auth.signup({
  // }, (err) => {
  //   if (err) {
  //     console.error('Something went wrong ', err.message);
  //   } else {
  //     console.log(this.props.auth);
  //   }
  // });
  // const facebookProvider = new firebase.auth.FacebookAuthProvider();
  // const doAuth = yield call(() => firebaseAuth
  //   .signInWithPopup(facebookProvider)
  //   .then((result) => (result))
  //   .catch((e) => ({ error: e }))
  // );
  // if (doAuth.error) {
  //   yield put(loginError(doAuth.error));
  // } else {
  //   yield call(succesfulLogin, doAuth);
  // }
}
export function* startLoginWithFacebookWatcher() {
  while (yield take(LOGIN_FACEBOOK)) {
    yield put(startLogin());
    yield call(startLoginWithFacebook);
  }
}


export function* startLoginWithTwitter() {
  // auth.signup({
  // }, (err) => {
  //   if (err) {
  //     console.error('Something went wrong ', err.message);
  //   } else {
  //     console.log(this.props.auth);
  //   }
  // });
  // const twitterProvider = new firebase.auth.TwitterAuthProvider();
  // const doAuth = yield call(() => firebaseAuth
  //   .signInWithPopup(twitterProvider)
  //   .then((result) => (result))
  //   .catch((e) => ({ error: e }))
  // );
  // if (doAuth.error) {
  //   yield put(loginError(doAuth.error));
  // } else {
  //   yield call(succesfulLogin, doAuth);
  // }
}
export function* startLoginWithTwitterWatcher() {
  while (yield take(LOGIN_TWITTER)) {
    yield put(startLogin());
    yield call(startLoginWithTwitter);
  }
}

export function* startLoginWithAuth0Watcher() {
  while (yield take(LOGIN_AUTH0)) {
    yield auth.login();
    yield put(startLogin());
  }
}

export function* rootSaga() {
  // Fork watchers so we can continue execution
  yield fork(startLoginWithFacebookWatcher);
  yield fork(startLoginWithTwitterWatcher);
  yield fork(startLoginWithAuth0Watcher);

  // Suspend execution when location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher1);
  // yield cancel(watcher2);
}

// All sagas to be loaded
export default [
  rootSaga,
];
