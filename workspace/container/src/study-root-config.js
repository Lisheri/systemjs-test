// ! 容器入口文件
import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes } from "single-spa-layout";

// ! 不在使用 registerApplication 注册路由, 而是采用路由引擎的方式注册
// constructRoutes 调用完成后, 将会返回对应dom节点下面的路由信息组成的一个对象, 对象的属性全是和路由相关
// 返回值包含了路由信息的数组, 数组中虽然存储的内容是一个对象, 但是他不是有效的registerApplication这个方法的参数
// 所以需要使用constructApplications方法, 对routes的数组成员进行遍历, 每次遍历都会调用loadApp方法, 这个方法实际上就是之前使用registerApplication传入的app字段, 也就是模块加载方法
// 这里使用System.import方法导入应用, 因此内部直接return System.import(name)即可, name就是放在route组件下application标签上的name属性

// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"));

// 获取路由信息数组(数组上包含 { name: string, app: string, activeWhen })
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

// * 批量注册
applications.forEach(registerApplication);

// * registerApplication 注册微应用
// * start 启动微前端应用

/* registerApplication({
  // * 代表微应用的名字
  name: "@single-spa/welcome",
  // * app规定必须返回一个promise
  app: () =>
    // * System.import 用于引入模块, 返回一个promise
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // * 路由为其中的值, 激活上面的微应用
  activeWhen: ["/"],
}); */

// * 通过拍平参数传递顺序就是name app activeWhen
// registerApplication(
//   "@single-spa/welcome",
//   () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   // * location可以拿到用户访问的地址, 当前函数返回boolean值, 为true则启动应用
//   (location) => location.pathname === "/"
// );

// registerApplication(
//   "@study/test-react-micro",
//   () => System.import("@study/test-react-micro"),
//   (location) => location.pathname === "/react"
// );

// registerApplication(
//   "@study/react-todo",
//   () => System.import("@study/react-todo"),
//   (location) => location.pathname.startsWith("/todo")
// );

// registerApplication(
//   "@study/realworld",
//   () => System.import("@study/realworld"),
//   (location) => location.pathname.startsWith("/realworld")
// );

start({
  // ? 是否可以通过 history.pushState() 和 history.replaceState() 更改触发 single-spa 路由
  // * true 允许 false 不允许
  urlRerouteOnly: true,
});
