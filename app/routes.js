// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
// import { reducer } from 'redux-storage';
import authSagas from './utils/auth/sagas';
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const {
    injectReducer,
    injectSagas,
  } = getAsyncInjectors(store);
  injectSagas(authSagas);
  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // REDUCERS
          System.import('containers/Home/reducer'),
          System.import('containers/RightSide/reducer'),

          // SAGAS
          System.import('containers/Home/sagas'),
          System.import('containers/RightSide/sagas'),

          System.import('containers/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          reducerHome, reducerRightSide, // REDUCERS
          sagasHome, sagasRightSide,  // SAGAS
          component,
        ]) => {
          injectReducer('coworks', reducerHome.default);
          injectReducer('currentCowork', reducerRightSide.default);

          injectSagas(sagasHome.default);
          injectSagas(sagasRightSide.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/search/:cowork_name',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // REDUCERS
          System.import('containers/Home/reducer'),
          System.import('containers/RightSide/reducer'),

          // SAGAS
          System.import('containers/Home/sagas'),
          System.import('containers/RightSide/sagas'),

          System.import('containers/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          reducerHome, reducerRightSide, // REDUCERS
          sagasHome, sagasRightSide,  // SAGAS
          component,
        ]) => {
          injectReducer('coworks', reducerHome.default);
          injectReducer('currentCowork', reducerRightSide.default);

          injectSagas(sagasHome.default);
          injectSagas(sagasRightSide.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          // System.import('containers/Login/reducer'),
          // System.import('containers/Login/sagas'),
          System.import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        // importModules.then(([reducerLogin, sagas, component]) => {
        importModules.then(([component]) => {
          // injectReducer('login', reducerLogin.default);
          // injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
