/**
*
* Description
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

export class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const phone = this.props.phoneNumber ? (<a href={`tel:${this.props.phoneNumber}`} className={styles.titleLink}>{this.props.phoneNumber}</a>) : null;
    const mapURL = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${this.props.latitud},${this.props.longitud}&key=AIzaSyAZ8NhqleEQqMr-WpjgY0gwTjwtyD3LcyM`;

    return (
      <div className={styles.description}>
        <a href={this.props.webpage} target="_blank" className={styles.titleLink}><h2>{this.props.name}</h2></a>
        <p className={styles.subTitle}>{this.props.street} {this.props.number} - {this.props.city.name}, {this.props.country.name}</p>
        <p className={styles.paragraph}>{this.props.longDescription || 'Aun no tenemos una descripción :/'}</p>
        <a href={this.props.webpage} target="_blank" className={styles.titleLink}>{this.props.webpage}</a>
        {phone}
        <p className={styles.mapImageWrapper}>
          <img alt={''} src={mapURL} className={styles.mapImage} />
        </p>
      </div>
    );
  }
}

Description.propTypes = {
  longDescription: PropTypes.string.isRequired,
  country: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  number: PropTypes.string.isRequired,
  latitud: PropTypes.number.isRequired,
  longitud: PropTypes.number.isRequired,
  street: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  webpage: PropTypes.string.isRequired,
};

export default Description;
