/**
*
* Item
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  itemClicked(nombre) {
    console.log(nombre);
  }
  render() {
    const { nombre, descripcion, direccion } = this.props.cowork;
    const { calle, numero, ciudad, pais } = direccion;
    console.log(this.props.cowork);
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
    descripcion: PropTypes.string.shape({
      corta: PropTypes.string.isRequired,
    }),
    direccion: PropTypes.string.shape({
      calle: PropTypes.string.isRequired,
      numero: PropTypes.string.isRequired,
      ciudad: PropTypes.string.isRequired,
      pais: PropTypes.string.isRequired,
    }),
  }),
};
export default Item;
