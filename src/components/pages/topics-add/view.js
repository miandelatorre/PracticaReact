import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {Input, Button} from '../../atoms';
import styles from './styles';

class TopicsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: '',
      topicTitle: '',
      postsNumber: '',
      lastPosterUsername: '',
    };
  }

  _onSubmmit = () => {
    const {name, age, image} = this.state;
    const {topic} = this.props;
    console.log('topics-add view.js 29: ', topic);
    console.log('topics-add view.js 30: ', this.props);
    const data = {
      topico: this.state.topicId,
      titulo: this.state.topicTitle,
      numPosts: this.state.postsNumber,
      ultimoUsuarioPostear: this.state.lastPosterUsername,
    };

    this.props.postTopic(data);
    //Actions.push('ListTopics');
  };

  render() {
    const {topicId, topicTitle, postsNumber, lastPosterUsername} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          label={'Topic Id: '}
          value={topicId}
          onChangeText={text => this.setState({topicId: text})}
          placeholder={'Introduce el Topic Id'}
          style={styles.input}
        />
        <Input
          label={'Topic Title: '}
          value={topicTitle}
          onChangeText={text => this.setState({topicTitle: text})}
          placeholder={'Introduce el Topic Title'}
          style={styles.input}
        />
        <Input
          label={'Posts Number: '}
          value={postsNumber}
          onChangeText={text => this.setState({postsNumber: text})}
          placeholder={'Introduce el Posts Number'}
          style={styles.input}
        />
        <Input
          label={'Last Poster Username: '}
          value={lastPosterUsername}
          onChangeText={text => this.setState({lastPosterUsername: text})}
          placeholder={'Introduce el Last Poster Username'}
          style={styles.input}
        />
        <Button
          label={'Crear Topic'}
          loading={loading}
          onPress={this._onSubmmit}
          style={{marginTop: 25, marginHorizontal: 25}}
        />
      </SafeAreaView>
    );
  }
}

TopicsAdd.propTypes = {
  loading: PropTypes.bool,
  topic: PropTypes.object,
  postTopic: PropTypes.func,
};

export default TopicsAdd;
