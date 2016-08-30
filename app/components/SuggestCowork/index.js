/**
*
* TopBar
*
*/

import React, { PropTypes, Component } from 'react';
import styles from './styles.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Form from './form';

class SuggestCowork extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.base}>
        <Form
          onSubmit={(e) => {
            console.log(e);
          }}
        />
      </div>
    );
  }
}

SuggestCowork.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SuggestCowork);
