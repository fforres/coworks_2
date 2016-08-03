/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectLoggedIn } from 'utils/auth/selectors';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
import { loginFacebook, loginTwitter } from 'utils/auth/actions';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.loginFacebook = this.loginFacebook.bind(this);
    this.loginTwitter = this.loginTwitter.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      this.gotoHome();
    }
  }
  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.gotoHome();
    }
  }
  gotoHome() {
    this.props.changeRoute('/');
  }
  loginFacebook() {
    this.props.loginWithFacebook();
  }
  loginTwitter() {
    this.props.loginWithTwitter();
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
        <h4> Ingresa usando Facebook o Twitter. </h4>
        <div className={styles.iconsWrapper}>
          <a
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              this.loginFacebook();
            }}
          >
            <div className={styles.icon}>
              <span className={styles.facebook}></span>
            </div>
          </a>
          <a
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              this.loginTwitter();
            }}
          >
            <div className={styles.icon}>
              <span className={styles.twitter}></span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginWithFacebook: PropTypes.func.isRequired,
  loginWithTwitter: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginWithFacebook: () => dispatch(loginFacebook()),
    loginWithTwitter: () => dispatch(loginTwitter()),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
