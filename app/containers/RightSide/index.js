/*
 *
 * RightSide
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectRightSide, selectCurrentCowork, selectCurrentFilters } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getCoworkByKey, setFilter } from './actions';
import styles from './styles.css';
import Welcome from 'components/Welcome';
import Spinner from 'components/Spinner';
import Description from 'components/Description';

export class RightSide extends React.Component {
  componentDidMount() {
    if (this.props.routeParams.cowork_name) {
      this.reloadCoworkInfo('nombre', this.props.routeParams.cowork_name);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
        nextProps.routeParams.cowork_name &&
        (this.props.routeParams.cowork_name !== nextProps.routeParams.cowork_name)
    ) {
      this.reloadCoworkInfo('nombre', nextProps.routeParams.cowork_name);
    }
  }
  reloadCoworkInfo(key, value) {
    // TODO: Change 'nombre' key, to find by county, or other parameter.
    this.props.setCoworkFilters(key, value);
    this.props.getCowork();
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
  getCowork: PropTypes.func.isRequired,
  routeParams: PropTypes.object.isRequired,
  setCoworkFilters: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.bool.isRequired, PropTypes.string.isRequired]),
    value: PropTypes.oneOfType([PropTypes.bool.isRequired, PropTypes.string.isRequired]),
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  rightSideState: selectRightSide(),
  filters: selectCurrentFilters(),
  currentCowork: selectCurrentCowork(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCowork: (key, value) => {
      dispatch(getCoworkByKey(key, value));
    },
    setCoworkFilters: (key, value) => {
      dispatch(setFilter(key, value));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSide);
