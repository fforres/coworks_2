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
import { RaisedButton, IconMenu, MenuItem, IconButton, Divider } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import Code from 'material-ui/svg-icons/action/code';
import styles from './styles.css';


export class LateralMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toLogin = this.toLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
  }
  toLogin() {
    this.props.loginAuth0();
  }
  doLogout() {
    this.props.startLogout();
  }
  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }
  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }
  render() {
    let sessionData = (<MenuItem value="1" primaryText="Login" onTouchTap={this.toLogin} />);
    if (this.props.loggedIn) {
      sessionData = (<MenuItem value="1" primaryText="Logout" onTouchTap={this.doLogout} />);
    }
    return (
      <div className={styles.textWrapper}>
        <RaisedButton
          className={[styles.menuItem].join(' ')}
          label="Sugiere un Cowork"
          labelPosition="before"
          onClick={(e) => {
            e.preventDefault();
            this.props.changeRoute('/suggest_cowork');
          }}
          primary
          style={{
            margin: 12,
          }}
        />
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          {sessionData}
          <Divider />
          <MenuItem
            value="4"
            primaryText="Source Code"
            leftIcon={<Code />}
            onClick={() => {
              window.open('http://github.com/fforres/coworks_2', '_blank');
            }}
          />
        </IconMenu>
      </div>
    );
  }
}

LateralMenu.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LateralMenu);
