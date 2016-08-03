/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// TODO constrain eslint import/no-unresolved rule to this block
// Load the manifest.json file and the .htaccess file
import '!file?name=[name].[ext]!./manifest.json';  // eslint-disable-line import/no-unresolved
import 'file?name=[name].[ext]!./.htaccess';      // eslint-disable-line import/no-unresolved

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import 'font-awesome/css/font-awesome.css';
// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`


import { selectLocationState } from 'containers/App/selectors';
import App from 'containers/App';
import createRoutes from './routes';
import { install } from 'offline-plugin/runtime';
import Immutable from 'immutable';


configureStore(Immutable.fromJS({}), browserHistory, (store) => {
  // If you use Redux devTools extension, since v2.0.1, they added an
  // `updateStore`, so any enhancers that change the store object
  // could be used with the devTools' store.
  // As this boilerplate uses Redux & Redux-Saga, the `updateStore` is needed
  // if you want to `take` actions in your Sagas, dispatched from devTools.
  if (window.devToolsExtension && process.env.NODE_ENV !== 'production') {
    window.devToolsExtension.updateStore(store);
  }

  // Sync history and store, as the react-router-redux reducer
  // is under the non-default key ("routing"), selectLocationState
  // must be provided for resolving how to retrieve the "route" in the state
  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState(),
  });
  // Set up the router, wrapping all Routes in the App component
  const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
  };

  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={rootRoute}
        render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
      />
    </Provider>,
    document.getElementById('app')
  );

  // Install ServiceWorker and AppCache in the end since
  // it's not most important operation and if main code fails,
  // we do not want it installed
  install();
});
