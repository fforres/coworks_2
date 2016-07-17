import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { changeRoute } = this.props;
    // setTimeout(() => {
    changeRoute('/');
    // }, 100);
  }
  render() {
    return (
      <h1>Login</h1>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

Login.propTypes = {
  getCoworks: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(Login);
