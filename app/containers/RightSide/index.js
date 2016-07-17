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
import Spinner from 'components/Spinner';
import Description from 'components/Description';

export class RightSide extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // TODO: Change 'nombre' key, to find by county, or other parameter.
    this.props.getCoworkByKey('nombre', this.props.routeParams.cowork_name);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.routeParams.cowork_name !== nextProps.routeParams.cowork_name) {
      // TODO: Change 'nombre' key, to find by county, or other parameter.
      this.props.getCoworkByKey('nombre', nextProps.routeParams.cowork_name);
    }
  }
  render() {
    let toShow = <Welcome />;
    if (this.props.rightSideState.loading) {
      toShow = <Spinner />;
    } else {
      if (this.props.currentCowork) {
        toShow = <Description {...this.props.currentCowork} />;
      }
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
