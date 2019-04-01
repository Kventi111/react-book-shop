// import { createSelector } from 'reselect';

const applicationSelector = state => state.getIn(['application']);

const mapStateToProps = state => ({
  application: applicationSelector(state),
});

export default mapStateToProps;
