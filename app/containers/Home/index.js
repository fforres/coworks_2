/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectLoading, selectCoworksArr } from './selectors';
import styles from './styles.css';
import { push } from 'react-router-redux';

import TopBar from 'components/TopBar';
import BottomArea from 'components/BottomArea';

import { createStructuredSelector } from 'reselect';
import { getCoworks } from './actions';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getCoworks();
  }
  render() {
    return (
      <div className={styles.home}>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <TopBar getCoworks={this.props.getCoworks} />
        <BottomArea
          coworksList={this.props.coworksList}
          loading={this.props.loading}
          routeParams={this.props.routeParams}
        />
      </div>
    );
  }
}

Home.propTypes = {
  getCoworks: PropTypes.func.isRequired,
  coworksList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired, // TODO: Why is it an object the first time?
  loading: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coworksList: selectCoworksArr(),
  loading: selectLoading(),
});


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    getCoworks: () => {
      dispatch(getCoworks());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
