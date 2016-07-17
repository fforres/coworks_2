/**
*
* ItemsList
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import Item from '../Item';

class ItemsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.itemsList}>
        {this.props.coworksList.map((el) => (
          <Item key={el.id} cowork={{ ...el }} />
        ))}
      </div>
    );
  }
}

ItemsList.propTypes = {
  coworksList: PropTypes.array.isRequired,
};

export default ItemsList;
