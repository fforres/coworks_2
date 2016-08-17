/**
*
* Item
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';


class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  itemClicked(nombre) {
    const parsedNombre = encodeURI(nombre);
    this.props.changeRoute(`/search/${parsedNombre}`);
  }
  render() {
    const { name, street, number, city, country, shortDescription } = this.props.cowork;
    return (
      <div className={styles.item}>
        <a
          href="#2"
          onClick={(e) => {
            e.preventDefault();
            this.itemClicked(name);
          }}
          className={styles.link}
        >
          <div>
            <b>
              {name}
            </b>
            <i className={styles.address}> {street}, {number} - {city.name}, {country.name}</i>
          </div>
          <div className={styles.subTitle}>
            <span>{shortDescription}</span>
          </div>
        </a>
      </div>
    );
  }
}

Item.propTypes = {
  cowork: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    country: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
  changeRoute: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Item);
