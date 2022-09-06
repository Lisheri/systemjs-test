import store from "./store";

class Shared {
  // * 获取token
  getToken() {
    const state = store.getState();
    return state.token || '';
  }

  // * 设置token
  setToken(token) {
    console.info(token)
    store.dispatch({
      type: 'SET_TOKEN',
      value: token
    })
  }
}

const shared = new Shared();

export default shared;
