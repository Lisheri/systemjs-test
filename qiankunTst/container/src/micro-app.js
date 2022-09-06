import shared from '@/shared';

const microApps = [
  {
    name: 'vue1',
    entry: '//localhost:7001/', // 默认会加载这个html, 解析里面的js, 动态执行, 但是子应用必须支持跨域(内部使用的fetch读取js文件等)
    activeRule: '/dyAdmin',
    container: '#container', // 子应用挂载的节点
    props: {
      routerBase: '/dyAdmin', // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
      // * 将shared实例下发给子应用
      shared
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:7070/',
    activeRule: '/react',
    container: '#reactContainer', // 子应用挂载的div
    props: {
      routerBase: '/react',
      shared
    }
  }
]

export default microApps