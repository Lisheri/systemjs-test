import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.value
      }
    default:
      return state;
  }
}

// * 创建全局状态池
const store = createStore(reducer);

export default store;
