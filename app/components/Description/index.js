/**
*
* Description
*
*/

import React from 'react';

import styles from './styles.css';

class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.description}>
        <h1>Description!</h1>
        <p>qweqweqweqwe qwe qwe qw </p>

      </div>
    );
  }
}

export default Description;
