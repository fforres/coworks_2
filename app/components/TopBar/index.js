/**
*
* TopBar
*
*/

import React, { PropTypes } from 'react';
import SearchBar from '../SearchBar';
import styles from './styles.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Menu from 'components/Menu';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.topBar}>
        <button
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.props.changeRoute('/');
          }}
          className={styles.button}
        > Coworks</button>
        <SearchBar getCoworks={this.props.getCoworks} />
        <Menu />
      </div>
    );
  }
}

TopBar.propTypes = {
  getCoworks: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TopBar);
