import {connect} from 'react-redux';
import View from './view';
import {topicsActions} from '../../../redux/topics';

const mapStateProps = state => {
  console.log('container.js state: ', state);
  return {
    topicsList: state.topics.list,
    loading: state.topics.loading,
    item: state.topics.item,
    total: state.topics.total,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('pasa por container.js mapDispatchToProps');
  return {
    getLatestTopics: () => dispatch(topicsActions.fetchLatestTopics()),
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(View);
