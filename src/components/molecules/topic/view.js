import React, {Component} from 'react';
import {View, Alert, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import PropType from 'prop-types';

class Topic extends Component {
  render() {
    console.log('this.props: ', this.props);
    const {topic, onPress} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => onPress(topic)}>
          <Text style={styles.font}>{topic.title}</Text>
          <Text> </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Topic.defaultProps = {
  onPress: () => {},
};

Topic.propTypes = {
  topic: PropType.object.isRequired,
  onPress: PropType.func,
};

export default Topic;
