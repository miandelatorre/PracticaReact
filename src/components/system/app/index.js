import React, {Component} from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {StatusBar} from 'react-native';
import {ListTopics, DetailTopic, TopicsAdd} from '../../pages';
import colors from '../../../assets/colors';
import {Provider} from 'react-redux';
import store from '../../../config/redux';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    //console.log('store: ', store.getState());
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key={'ListTopics'}
              component={ListTopics}
              hideNavBar={false}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              initial={true}
              titleStyle={{color: colors.white}}
              title="Listado de Topics"
              rightTitle={'Crear'}
              onRight={() => Actions.push('TopicsAdd')}
              rightButtonTextStyle={{color: colors.white}}
            />
            <Scene
              key={'DetailTopic'}
              component={DetailTopic}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
              title="Detalle de Topic"
              //backButtonTextStyle={{color: colors.white}}
              //backButtonTintColor={colors.white}
              /*initial={true}*/
            />
            <Scene
              key={'TopicsAdd'}
              component={TopicsAdd}
              hideNavBar={false}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              initial={false}
              titleStyle={{color: colors.white}}
              title={'Añadir Topic'}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
