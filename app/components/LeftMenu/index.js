/**
*
* LeftMenu
*
*/

import React from 'react';
import styles from './styles.css';
// Make sure to import default styles.
// This only needs to be done once; probably during your application's bootstrapping process.
// Then import the virtualized Select HOC

class LeftMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  updateItem(value) {
    console.log(value);
  }
  render() {
    return (
      <div className={[styles.leftMenu, styles.columnify].join(' ')}>
        <div className={styles.columnify}>
          <h4>Title</h4>
        </div>
        <div className={styles.columnify}>
          <h4>Title2</h4>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
