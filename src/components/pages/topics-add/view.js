import React from 'react';
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

  render() {
    const {topicId, topicTitle, postsNumber, lastPosterUsername} = this.state;
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
          loading={false}
          onPress={() => {}}
          style={{marginTop: 25, marginHorizontal: 25}}
        />
      </SafeAreaView>
    );
  }
}

TopicsAdd.propTypes = {};

export default TopicsAdd;
