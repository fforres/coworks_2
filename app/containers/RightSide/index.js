/*
 *
 * RightSide
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectRightSide, selectCurrentCowork } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getCoworkByKey } from './actions';
import styles from './styles.css';
import Welcome from 'components/Welcome';

export class RightSide extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.props)
    console.log(this.props.getCoworkByKey);
  }
  render() {
    let toShow = <Welcome />;
    if (this.props.currentCowork) {
      toShow = (<h1>:o</h1>);
    }
    return (
      <div className={styles.rightSide}>
        {toShow}
      </div>
    );
  }
}

RightSide.propTypes = {
  rightSideState: PropTypes.object.isRequired,
  currentCowork: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  getCoworkByKey: PropTypes.func.isRequired,
  routeParams: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  rightSideState: selectRightSide(),
  currentCowork: selectCurrentCowork(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCoworkByKey: (key, value) => {
      dispatch(getCoworkByKey(key, value));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSide);
