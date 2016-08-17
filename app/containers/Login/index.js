/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectLoggedIn } from 'utils/auth/selectors';
import { selectQueryParams } from 'containers/App/selectors';

import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { saveUserSession } from 'utils/auth/actions';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.gotoHome = this.gotoHome.bind(this);
    this.saveUserSession = this.saveUserSession.bind(this);
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      this.gotoHome();
    } else {
      this.saveUserSession();
    }
  }
  componentDidUpdate(newProps) {
    if (this.props.loggedIn && this.props.loggedIn !== newProps.loggedIn) {
      this.gotoHome();
    } else {
      this.saveUserSession();
    }
  }
  saveUserSession() {
    const auth0Data = JSON.parse(localStorage.getItem('AUTH0_DATA'));
    if (auth0Data) {
      localStorage.removeItem('AUTH0_DATA');
      this.props.saveUserSession(auth0Data);
    }
  }
  gotoHome() {
    this.props.changeRoute('/');
  }
  render() {
    return (
      <div className={styles.login}>
        <Helmet
          title="Login"
          meta={[
            { name: 'Crea tu cuenta en CWRKS!', content: 'CWRKS, es EL sitio colaborativo para encontrar tu mejor opcion de cowork' },
          ]}
        />
        <h1> Login </h1>
      </div>
    );
  }
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  changeRoute: PropTypes.func.isRequired,
  saveUserSession: PropTypes.func.isRequired,
  queryParams: PropTypes.shape({
    state: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  queryParams: selectQueryParams(),
  loggedIn: selectLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    saveUserSession: (code, state) => dispatch(saveUserSession(code, state)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
