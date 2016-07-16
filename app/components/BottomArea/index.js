/**
*
* BottomArea
*
*/

import React from 'react';
import LeftMenu from '../LeftMenu';
import ItemsList from '../ItemsList';
import Welcome from '../Welcome';

import styles from './styles.css';

class BottomArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.bottomArea}>
        <LeftMenu />
        <ItemsList />
        <Welcome />
      </div>
    );
  }
}

export default BottomArea;
