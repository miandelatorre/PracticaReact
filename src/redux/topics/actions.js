import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

function updateList(newList, perPage) {
  console.log('actions.js 6');
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList, perPage: perPage},
  };
  return action;
}

export const setItem = item => {
  console.log('pasa por actions.js setItem', item);
  const action = {
    type: types.SET_ITEM,
    payload: {item},
  };
  return action;
};

export function setLoading(loading) {
  console.log('pasa por actions.js setLoading', loading);
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
}

export const fetchLatestTopics = () => {
  // REDUX THUNK
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    api
      .getLatestTopics()
      .then(res => {
        let list = [];
        //let listVista = [];
        let total = 0;
        let perPage = 0;
        console.log('getLatestTopics res: ', res);
        list = res.data.topic_list.topics;
        //let i = 0;
        //let j = 20;
        //listVista = list.slice(0, 20);
        //console.log('topics action.js listVista:', listVista);
        //listVista = list.perPage = res.data.perPage;
        perPage = res.data.topic_list.perPage;
        console.log('actions.js getLatestTopics 32');
        //total = list.length;
        //dispatch(updateList(listVista, total));
        dispatch(updateList(list, perPage));
        console.log('actions.js getLatestTopics 34');
        dispatch(setLoading(false));
        console.log('actions.js getLatestTopics 36');
      })
      .catch(e => {
        Alert.alert('Error', e.message || 'Ha ocurrido un error');
        dispatch(setLoading(false));
      });

    /*
    let list = [];
    this.setState({loading: true});

    api
      .getLatestTopics()
      .then(res => {
        console.log('getLatestTopics res: ', res);
        list = res.data.topic_list.topics;
        this.setState({listTopics: list, loading: false});
      })
      .catch(e => {
        this.setState({loading: false}, () => {
          Alert.alert('Error', 'Ha ocurrido un error');
        });
      });
    */
  };
};
