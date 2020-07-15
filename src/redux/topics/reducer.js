import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  item: null,
  perPage: 0,
};

const reducer = (state = initialState, action = {}) => {
  console.log('pasa por reducer.js reducer');
  console.log('state: ', state);
  console.log('action: ', action);
  console.log('action.type: ', action.type);
  console.log('action.type: ', action.payload);

  switch (action.type) {
    case types.UPDATE_LIST:
      return {
        ...state,
        list: action.payload.list,
        perPage: action.payload.perPage,
      };

    case types.SET_LOADING:
      console.log('pasa por reducer.js reducer SET_LOADING', action.payload);
      return {...state, loading: action.payload.loading};

    case types.SET_ITEM:
      console.log('pasa por reducer.js reducer SET_ITEM', action.payload);
      console.log('pasa por reducer.js reducer SET_ITEM', action.payload.item);
      return {...state, item: action.payload.item};

    default:
      return state;
  }
};

export default reducer;
