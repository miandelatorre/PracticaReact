import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class DetailTopic extends React.Component {
  render() {
    console.log('DetailTopic this.props: ', this.props);
    const {topic} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.font}>Topic Id: {topic.id}</Text>
        <Text> </Text>
        <Text style={styles.font}>Topic Title: {topic.title}</Text>
        <Text> </Text>
        <Text style={styles.font}>Posts Number: {topic.posts_count}</Text>
        <Text> </Text>
        <Text style={styles.font}>
          Last Poster Username: {topic.last_poster_username}
        </Text>
        <Text> </Text>
      </SafeAreaView>
    );
  }
}

DetailTopic.propTypes = {
  getTopic: PropTypes.func,
  topic: PropTypes.object,
};

export default DetailTopic;

/*
        <Text style={styles.font}>Topic Id: {topic.id}</Text>
        <Text> </Text>
        <Text style={styles.font}>Topic Title: {topic.title}</Text>
        <Text> </Text>
        <Text style={styles.font}>Posts Number: {topic.posts_count}</Text>
        <Text> </Text>
*/
