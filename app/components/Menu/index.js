/**
*
* Menu
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { startLogout } from 'utils/auth/actions';
import { createStructuredSelector } from 'reselect';
import { selectLoggedIn } from 'utils/auth/selectors';


import styles from './styles.css';

export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.toLogin = this.toLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  toLogin() {
    this.props.changeRoute('/login');
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
      <a
        className={styles.menu}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <span className={styles.textWrapper}>
          <span className={styles.text}> Menu </span>
          <span className={styles.icon}></span>
        </span>
        <div className={styles.sideMenuWrapper} >
          <div className={styles.sideMenu} >
            <ul className={styles.list}>
              {sessionData}
              <li className={[styles.link]}> Feedback </li>
              <li> <hr /> </li>
              <li className={[styles.link]}> Disclaimer </li>
            </ul>
          </div>
        </div>
      </a>
    );
  }
}

Menu.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  startLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    startLogout: () => dispatch(startLogout()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
