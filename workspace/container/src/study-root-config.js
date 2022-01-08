// ! 容器入口文件
import { registerApplication, start } from "single-spa";

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
registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // * location可以拿到用户访问的地址, 当前函数返回boolean值, 为true则启动应用
  (location) => location.pathname === "/"
);

registerApplication(
  "@study/test-react-micro",
  () => System.import("@study/test-react-micro"),
  (location) => location.pathname === "/react"
);

registerApplication(
  "@study/react-todo",
  () => System.import("@study/react-todo"),
  (location) => location.pathname.startsWith("/todo")
);

registerApplication(
  "@study/realworld",
  () => System.import("@study/realworld"),
  (location) => location.pathname.startsWith("/realworld")
);

start({
  // ? 是否可以通过 history.pushState() 和 history.replaceState() 更改触发 single-spa 路由
  // * true 允许 false 不允许
  urlRerouteOnly: true,
});
