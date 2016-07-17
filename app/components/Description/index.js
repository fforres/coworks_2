/**
*
* Description
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

export class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const phone = this.props.telefono ? (<a href={`tel:${this.props.telefono}`} className={styles.titleLink}>{this.props.telefono}</a>) : null;
    return (
      <div className={styles.description}>
        <a href={this.props.url} target="_blank" className={styles.titleLink}><h2>{this.props.nombre}</h2></a>
        <p className={styles.paragraph}>{this.props.descripcion.larga || this.props.descripcion.corta || 'Aun no tenemos una descripción :/'}</p>
        <a href={this.props.url} target="_blank" className={styles.titleLink}>{this.props.url}</a>
        {phone}
      </div>
    );
  }
}

Description.propTypes = {
  descripcion: PropTypes.shape({
    corta: PropTypes.string,
    larga: PropTypes.string,
  }).isRequired,
  direccion: PropTypes.shape({
    calle: PropTypes.string,
    ciudad: PropTypes.string,
    comuna: PropTypes.string,
    numero: PropTypes.string,
    pais: PropTypes.string,
  }).isRequired,
  nombre: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Description;
