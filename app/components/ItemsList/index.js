/**
*
* ItemsList
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import Item from '../Item';
import Spinner from 'components/Spinner';

class ItemsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let content = <div />;
    if (!this.props.loading) {
      content = this.props.coworksList.map((el) => (
        <Item key={el.id} cowork={{ ...el }} />
      ));
    } else {
      content = <Spinner />;
    }
    return (
      <div className={styles.itemsList}>
        {content}
      </div>
    );
  }
}

ItemsList.propTypes = {
  coworksList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ItemsList;
