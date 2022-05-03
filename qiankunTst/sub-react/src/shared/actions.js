function emptyAction() {
  // 抛提示, 当前使用的是空Action
  console.warn('Current execute action is empty!');
}

class Actions {

  // * 设置默认值
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  // * 设置actions
  setActions(actions) {
    this.actions = actions;
  }

  // * 观察者函数
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  // * 设置state
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();

// * 导出单例
export default actions;
