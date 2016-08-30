/**
*
* TopBar
*
*/

import React, { PropTypes, Component } from 'react';
import styles from './formStyles.css';
import { Field, reduxForm } from 'redux-form/immutable';
import { TextField, RaisedButton, AutoComplete } from 'material-ui';

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
    const renderCoworkName = ({ input, label, meta: { touched, error }, ...custom }) => (
      <TextField
        errorText={touched && error}
        floatingLabelText={label}
        hintText={label}
        {...input}
        {...custom}
      />
    );
    const renderCoworkDescriptionShort = ({ input, label, meta: { touched, error }, ...custom }) => (
      <TextField
        errorText={touched && error}
        floatingLabelText={label}
        hintText={label}
        {...input}
        {...custom}
      />
    );
    const renderCoworkDescriptionLong = ({ input, label, meta: { touched, error }, ...custom }) => (
      <TextField
        errorText={touched && error}
        floatingLabelText={label}
        hintText={label}
        {...input}
        {...custom}
      />
    );
    const dataSource3 = [
      { textKey: 'Some Text', valueKey: 'someFirstValue' },
      { textKey: 'Some Text', valueKey: 'someSecondValue' },
    ];
    const dataSourceConfig = {
      text: 'textKey',
      value: 'valueKey',
    };

    const renderCountry = (
      <AutoComplete
        floatingLabelText="text-value data"
        dataSource={dataSource3}
        openOnFocus
        filter={AutoComplete.fuzzyFilter}
        dataSourceConfig={dataSourceConfig}
        maxSearchResults={5}
        fullWidth
      />
    );
    return (
      <div className={styles.base}>
        <div
          className={styles.text}
        >
          <h1>Sugiérenos un Cowork</h1>
          <p> ¿Sabes de algún lugar que nosotros no? <br /> ¿Conoces de primera mano aquel cowork del que todos deberían saber? <br /> </p>
          <p> Solo mándanos la información necesaria y nuestros robots se encargarán de agregarlo! </p>
        </div>
        <form
          type="horizontal"
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <div>
            <Field
              name="name"
              label="Nombre del Cowork"
              component={renderCoworkName}
              fullWidth
              type="text"
            />
          </div>
          <div>
            <Field
              name="county"
              label="Pais"
              component={renderCoworkDescriptionLong}
              fullWidth
              type="text"
            />
          </div>
          <div>
            <Field
              name="shortDescription"
              label="Descripcion Corta"
              component={renderCoworkDescriptionShort}
              fullWidth
              type="text"
            />
          </div>
          <div>
            <Field
              name="longDescription"
              label="Descripcion Larga"
              component={renderCoworkDescriptionLong}
              rows={2}
              rowsMax={4}
              fullWidth
              type="text"
            />
          </div>
          <div>
            {renderCountry}
          </div>
          <RaisedButton label="Submitear" primary type="submit" />
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
