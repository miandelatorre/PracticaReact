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
        <View style={{marginHorizontal: 20, marginTop: 40}}>
          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              marginBottom: 10,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {'Topic Id: '}
          </Text>
          <TextInput
            style={{
              color: 'black',
              fontSize: 16,
              minHeight: 40,
              backgroundColor: 'white',
              borderRadius: 6,
              paddingHorizontal: 10,
            }}
            placeholder={'Introduce el Topic Id'}
            placeholderTextColor={'grey'}
            onChangeText={text => this.setState({topicId: text})}
            underlineColorAndroid={'transparent'}
            value={topicId}
          />

          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              marginTop: 10,
              marginBottom: 10,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {'Topic Title: '}
          </Text>
          <TextInput
            style={{
              color: 'black',
              fontSize: 16,
              minHeight: 40,
              backgroundColor: 'white',
              borderRadius: 6,
              paddingHorizontal: 10,
            }}
            placeholder={'Introduce el Topic Title'}
            placeholderTextColor={'grey'}
            onChangeText={text => this.setState({postsNumber: text})}
            underlineColorAndroid={'transparent'}
            value={postsNumber}
          />

          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              marginTop: 10,
              marginBottom: 10,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {'Posts Number: '}
          </Text>
          <TextInput
            style={{
              color: 'black',
              fontSize: 16,
              minHeight: 40,
              backgroundColor: 'white',
              borderRadius: 6,
              paddingHorizontal: 10,
            }}
            placeholder={'Introduce el Posts Number'}
            placeholderTextColor={'grey'}
            onChangeText={text => this.setState({topicTitle: text})}
            underlineColorAndroid={'transparent'}
            value={topicTitle}
          />

          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              marginTop: 10,
              marginBottom: 10,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {'Last Poster Username: '}
          </Text>
          <TextInput
            style={{
              color: 'black',
              fontSize: 16,
              minHeight: 40,
              backgroundColor: 'white',
              borderRadius: 6,
              paddingHorizontal: 10,
            }}
            placeholder={'Introduce el Last Poster Username'}
            placeholderTextColor={'grey'}
            onChangeText={text => this.setState({lastPosterUsername: text})}
            underlineColorAndroid={'transparent'}
            value={lastPosterUsername}
          />
        </View>
      </SafeAreaView>
    );
  }
}

TopicsAdd.propTypes = {};

export default TopicsAdd;
