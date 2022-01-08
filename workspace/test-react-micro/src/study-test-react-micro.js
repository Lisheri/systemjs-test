// * 名字一定是 组织名称-应用名称
// * 在应用入口文件中导出微前端应用所需的生命周期函数, 生命周期函数必须返回Promise
// * 生命周期函数必须包含, 启动, 挂载 和 卸载
let testReactMicroContainer = null;

export const bootstrap = async function () {
  console.info("应用正在启动");
};

export const mount = async function () {
  console.info("应用挂载");
  testReactMicroContainer = document.createElement("div");
  testReactMicroContainer.innerHTML = "hello react";
  testReactMicroContainer.id = "reactContainer";
  document.body.appendChild(testReactMicroContainer);
};

export const unmount = async function () {
  console.info("应用卸载");
  document.body.removeChild(testReactMicroContainer);
};
