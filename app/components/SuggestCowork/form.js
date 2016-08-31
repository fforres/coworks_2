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
    const renderCoworkURL = ({ input, label, meta: { touched, error }, ...custom }) => (
      <TextField
        errorText={touched && error}
        floatingLabelText={label}
        hintText={label}
        {...input}
        {...custom}
      />
    );
    const dataSource3 = [
      { textKey: 'Some Text 1', valueKey: 'someFirstValue' },
      { textKey: 'Some Text 2', valueKey: 'someSecondValue' },
    ];
    const dataSourceConfig = {
      text: 'textKey',
      value: 'valueKey',
    };

    const country = ({ input, label, meta: { touched, error }, ...custom }) => (
      <AutoComplete
        errorText={touched && error}
        floatingLabelText={label}
        openOnFocus
        hintText={label}
        filter={AutoComplete.fuzzyFilter}
        dataSource={dataSource3}
        dataSourceConfig={dataSourceConfig}
        // onUpdateInput={(value) => {
        //   console.log(value);
        // }}
        onNewRequest={(searchText, dataSource) => {
          input.onChange(dataSource.valueKey);
        }}
        {...input}
        {...custom}
      />
    );

    const renderCity = (
      <AutoComplete
        floatingLabelText="Ciudad"
        dataSource={dataSource3}
        openOnFocus
        filter={AutoComplete.fuzzyFilter}
        dataSourceConfig={dataSourceConfig}
        maxSearchResults={5}
        fullWidth
      />
    );
    return (
      <form
        type="horizontal"
        onSubmit={this.handleSubmit}
        className={styles.form}
        autoComplete="off"
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
            name="myField"
            label="Country"
            fullWidth
            component={country}
          />
        </div>
        <div>
          {renderCity}
        </div>
        <div>
          <Field
            name="shortDescription"
            label="Descripcion"
            component={renderCoworkDescriptionShort}
            fullWidth
            type="text"
          />
        </div>
        <div>
          <Field
            name="url"
            label="Sitio Web"
            component={renderCoworkURL}
            fullWidth
            type="text"
          />
        </div>
        <div className={styles.buttonArea}>
          <RaisedButton label="Sugerir" primary type="submit" />
        </div>
      </form>
    );
  }
}

SuggestCoworkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'suggest_cowork',
})(SuggestCoworkForm);
