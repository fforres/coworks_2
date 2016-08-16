/**
*
* BottomArea
*
*/

import React, { PropTypes } from 'react';
import LeftMenu from '../LeftMenu';
import ItemsList from '../ItemsList';
import RightSide from 'containers/RightSide';

import styles from './styles.css';

class BottomArea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // routeParams={this.props.routeParams}
  render() {
    return (
      <div className={styles.bottomArea}>
        <LeftMenu />
        <ItemsList
          coworksList={this.props.coworksList}
          loading={this.props.loading}
        />
        <RightSide
          routeParams={this.props.routeParams}
        />
      </div>
    );
  }
}


BottomArea.propTypes = {
  coworksList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired,
};

export default BottomArea;
