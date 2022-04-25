import React from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

// * 使用Parcel公共库, 需要先引入 single-spa-react/parcel
// * 将 Parcel当做一个组件使用
// import Parcel from "single-spa-react/parcel";

const User = () => <div>user works</div>;

const routers = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/usr",
    name: "User",
    component: User,
  },
];

export default function Root(props) {
  // * 这个name就是注册应用时, 传入的应用名称
  console.info('加载');
  return (
    <BrowserRouter basename="/todo">
      <div>
        {/* <Parcel config={System.import("@study/navbar")} /> */}
        <div>
          {routers.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <Switch>
          <div>
            {
              routers.map((item, index) => (
                <Route key={index} path={item.path}>
                  {item.component()}
                </Route>
              ))
            }
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
