/**
*
* TopBar
*
*/

import React, { PropTypes, Component } from 'react';
import styles from './formStyles.css';
import { Field, reduxForm } from 'redux-form/immutable';

class SuggestCoworkForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <div className={styles.base}>
        <h2>Sugierenos un Cowork</h2>
        <div className="lead"> ¿Sabes de algún lugar que nosotros no? <br /> ¿Conoces de primera mano aquel cowork del que todos deberían saber? <br /> </div>
        <div className="lead"> Solo mándanos la información necesaria y nuestros robots se encargarán de agregarlo! </div>
        <form
          type="horizontal"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

SuggestCoworkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'suggest_cowork',
})(SuggestCoworkForm);
