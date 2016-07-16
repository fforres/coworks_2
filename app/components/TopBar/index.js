/**
*
* TopBar
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import styles from './styles.css';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.topBar}>
        <span>Coworks</span>
        <SearchBar />
        <span>Menu</span>
      </div>
    );
  }
}

export default TopBar;
