import { createApp } from 'vue'
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';

// Vue.config.productionTip = false;
const app = createApp(App);

app.use(router).use(Antd).mount('#app');


// 注册应用
registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});

// 开启qiankun
start();
