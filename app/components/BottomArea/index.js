/**
*
* BottomArea
*
*/

import React, { PropTypes } from 'react';
import LeftMenu from '../LeftMenu';
import ItemsList from '../ItemsList';
import Welcome from '../Welcome';

import styles from './styles.css';

class BottomArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.bottomArea}>
        <LeftMenu />
        <ItemsList
          coworksList={this.props.coworksList}
          loading={this.props.loading}
        />
        <Welcome />
      </div>
    );
  }
}

BottomArea.propTypes = {
  coworksList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BottomArea;
