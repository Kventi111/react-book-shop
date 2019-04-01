import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import immutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import routes from '../routes';
import * as Actions from './actions';
import mapStateToProps from './selectors';
// import RoutingErrorPage from '../components/ui-components/routing-error-page';
// import RboLayout, {
  // RboLayoutError,
//   RboLayoutHeader,
//   RboLayoutLeft,
//   RboLayoutContent
// } from '../components/ui-components/rbo-layout';
// import Layout, { Header } from '../components/ui-components/layout';


class Application extends Component {
  componentDidMount() {
    this.props.appInit()
    this.props.getBookListRequest()
  }

  render() {
    return (
      <div>
        <h1>hello from application container</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Application);
