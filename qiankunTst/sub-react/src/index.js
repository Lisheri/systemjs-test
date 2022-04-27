import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let root = null;
const render = (props) => {
  const { container } = props;
  // const root = ReactDOM.unstable_createRoot()
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

// * 系统挂载
export async function mount(props) {
  // ! mount 生命周期中可以拿到父项目传递过来的数据, props.data.router用于跳转到主项目/其他子项目的路由, props.data.store是父项目实例化的Vuex(如果有)
  console.log('props from main framework', props);
  render(props);
}

// * 系统卸载
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

