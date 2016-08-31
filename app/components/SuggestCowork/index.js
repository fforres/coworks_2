/**
*
* TopBar
*
*/

import React, { PropTypes, Component } from 'react';
import styles from './styles.css';

import { Paper } from 'material-ui';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Form from './form';

class SuggestCowork extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.base}>
        <Paper
          className={styles.formBase}
          zDepth={3}
        >
          <div className={styles.text}>
            <h1>Sugiérenos un Cowork</h1>
            <p> ¿Sabes de algún lugar que nosotros no? <br />¿Conoces de primera mano aquel cowork del que todos deberían saber?<br /> </p>
            <p> ¡Solo mándanos la información necesaria y nuestros cowork-bots se encargarán de agregarlo! </p>
            <small>(Te avisaremos con un correo cuando esté listo).</small>
          </div>
          <Form
            onSubmit={(e) => {
              console.log(e);
            }}
          />
        </Paper>
      </div>
    );
  }
}

SuggestCowork.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SuggestCowork);
