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
    const { nombre, descripcion, direccion } = this.props.cowork;
    const { calle, numero, ciudad, pais } = direccion;
    return (
      <div className={styles.item}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.itemClicked(nombre);
          }}
          className={styles.link}
        >
          <div className={styles.title}>
            <b>
              {nombre}
            </b>
            <i className={styles.address}> {calle}, {numero} - {ciudad}, {pais}</i>
          </div>
          <div className={styles.subTitle}>
            <span>{descripcion.corta}</span>
          </div>
        </a>
      </div>
    );
  }
}

Item.propTypes = {
  cowork: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.shape({
      corta: PropTypes.string.isRequired,
    }).isRequired,
    direccion: PropTypes.shape({
      calle: PropTypes.string.isRequired,
      numero: PropTypes.string.isRequired,
      ciudad: PropTypes.string.isRequired,
      pais: PropTypes.string.isRequired,
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
