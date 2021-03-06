/**
*
* Menu
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { startLogout, loginAuth0 } from 'utils/auth/actions';
import { createStructuredSelector } from 'reselect';
import { selectLoggedIn } from 'utils/auth/selectors';
import { Button } from 'elemental';
import { Icon } from 'react-fa';

import styles from './styles.css';

export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.toLogin = this.toLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  toLogin() {
    this.props.loginAuth0();
  }
  doLogout() {
    this.props.startLogout();
  }
  render() {
    let sessionData = (<li className={[styles.link]} onClick={this.toLogin} > Login </li>);
    if (this.props.loggedIn) {
      sessionData = (<li className={[styles.link]} onClick={this.doLogout} > Logout </li>);
    }
    return (
      <div className={styles.textWrapper}>
        <Button
          type="hollow-warning"
          onClick={(e) => {
            e.preventDefault();
            this.props.changeRoute('/suggest_cowork');
          }}
        >
          Sugiere un Cowork
        </Button>
        <a
          className={[styles.menu, styles.menuItem].join(' ')}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <span className={styles.textWrapper}>
            <span className={styles.text}> Menu </span>
            <span className={styles.icon}> <Icon name="bars" /> </span>
          </span>
          <div className={styles.sideMenuWrapper} >
            <div className={styles.sideMenu} >
              <ul className={styles.list}>
                {sessionData}
                <li className={[styles.link]}> Feedback </li>
                <li> <hr className={styles.hr} /> </li>
                <li className={[styles.link]}> Disclaimer </li>
                <li
                  className={[styles.link]}
                  onClick={() => {
                    window.open('http://github.com/fforres/coworks_2', '_blank');
                  }}
                > <Icon name="github" /> Code </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Menu.propTypes = {
  loginAuth0: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
  startLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    loginAuth0: () => dispatch(loginAuth0()),
    changeRoute: (url) => dispatch(push(url)),
    startLogout: () => dispatch(startLogout()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
