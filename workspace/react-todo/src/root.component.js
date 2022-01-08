import React from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

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
  console.info("搞起来");
  return (
    <BrowserRouter basename="/todo">
      <div>
        <div>
          {routers.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <Switch>
          <>
            {routers.map((item, index) => (
              <Route key={index} path={item.path}>
                {item.component}
              </Route>
            ))}
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
