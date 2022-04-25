import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // * 这个应用报错时, 可以显示这个函数中返回的东西(react常见错误边界)
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // * 默认情况下, 应用会被追加到body下面自动生成的一个div中
  // * 也可以手动修改, 通过使用配置项 domElementGetter
  // * 这样就可以将当前的应用添加到这个 id 为 myReact 的盒子中
  // domElementGetter: () => document.getElementById("myReact"),
});

export const { bootstrap, mount, unmount } = lifecycles;
