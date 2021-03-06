/**
*
* Spinner
*
*/

import React from 'react';

import styles from './styles.css';

class Spinner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.spinner}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
    );
  }
}

export default Spinner;
