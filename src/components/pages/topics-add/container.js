import {connect} from 'react-redux';
import View from './view';
import {topicsActions} from '../../../redux/topics';

const mapStateToProps = state => {
  return {
    loading: state.topics.loading,
    topic: state.topics.item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    postTopic: data => dispatch(topicsActions.postTopic(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
