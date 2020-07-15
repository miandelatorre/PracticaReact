import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Alert,
  FlatList,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {getLatestTopics} from '../../../api';
import {Topic} from '../../molecules';
import {color} from 'react-native-reanimated';

class ListTopics extends React.Component {
  componentDidMount() {
    console.log('view.js componentDidMount');
    this.props.getLatestTopics();
  }

  _onTopicPress = topic => {
    Actions.push('DetailTopic', {title: 'Detalle de Topic', topic: topic});
  };

  _renderItem = ({item}) => {
    return <Topic topic={item} onPress={this._onTopicPress} />;
  };

  render() {
    //console.log('this.listTopics: ', this.state.listTopics);
    console.log('view listTopics this.props.loading: ', this.props.loading);
    console.log('view listTopics this.props: ', this.props);
    //const {listTopics, loading} = this.state;
    //    const {listTopics, loading} = this.props;
    const {topicsList, loading, perPage} = this.props;
    console.log('view.js 38 ');
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={topicsList}
          keyExtractor={(item, index) => `topic-${item.id}`}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor={'white'}
              refreshing={loading}
              onRefresh={this.props.getLatestTopics}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

ListTopics.propTypes = {
  topicsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  item: PropTypes.object,
  total: PropTypes.number,
  getLatestTopics: PropTypes.func,
  setSelectedTopic: PropTypes.func,
};

export default ListTopics;
