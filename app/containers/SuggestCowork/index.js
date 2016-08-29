/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectLoading } from './selectors';
import styles from './styles.css';
import { push } from 'react-router-redux';

import TopBar from 'components/TopBar';

import { createStructuredSelector } from 'reselect';
import { getCoworks } from 'containers/Home/actions';
import SuggestCowork from 'components/SuggestCowork';

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
            { name: 'Suggest a Cowork', content: 'Suggest your cowork' },
          ]}
        />
        <TopBar getCoworks={this.props.getCoworks} />
        <SuggestCowork />
      </div>
    );
  }
}

Home.propTypes = {
  getCoworks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  routeParams: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
