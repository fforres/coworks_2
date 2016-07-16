/**
*
* SearchBar
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
    this.state.placeholder = 'BUSCA AQUÍ';
    this.removePlaceHolder = this.removePlaceHolder.bind(this);
    this.resetPlaceHolder = this.resetPlaceHolder.bind(this);
    this.setSearchString = this.setSearchString.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  setSearchString(searchString) {
    this.setState({ searchString });
  }
  submitSearch() {
    this.props.getCoworks();
  }
  removePlaceHolder() {
    this.setState({ placeholder: '' });
  }
  resetPlaceHolder() {
    this.setState({ placeholder: 'BUSCA AQUÍ' });
  }
  render() {
    return (
      <div className={styles.searchBar}>
        <input
          type="text" className={styles.searchInput}
          placeholder={this.state.placeholder}
          onFocus={this.removePlaceHolder} onBlur={this.resetPlaceHolder}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              this.submitSearch();
            }
          }}
          onChange={(e) => {
            this.setSearchString(e.currentTarget.value);
          }}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getCoworks: PropTypes.func.isRequired,
};

export default SearchBar;
