// * 实际上这两个框架, 不需要在每个微应用中下载和打包, 只需要import-map这个特性就可以解决
console.info(123123123)
import React from "react";
console.info(React)
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
