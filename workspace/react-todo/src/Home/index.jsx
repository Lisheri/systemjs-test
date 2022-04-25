import React, { useState, useEffect } from "react";

function useToolsModule() {
  const [toolsModule, setToolsModule] = useState()
  useEffect(() => {
    System.import("@study/tools").then(res => {
      console.info(res.sharedSubject)
      setToolsModule(res)
    })
  }, []);
  return toolsModule
}

export default function home() {
  // let test;
  // System.import("@study/tools").then(res => {
  //   test = res;
  //   test.sayHello('good')
  // })
  const toolsModule = useToolsModule();
  useEffect(() => {
    let subjection = null;
    if (toolsModule) {
      toolsModule.sayHello("@study/todos");
      // 订阅消息, 如果有消息过来, 则打印到控制台中
      // ! 但是这里要注意, 在组件中订阅消息后, 组件卸载时, 一定要取消, 否则会连续反复订阅
      subjection = toolsModule.sharedSubject.subscribe(console.log);
    }
    return () => {
      // 卸载
      subjection?.unsubscribe?.(); // 取消订阅
    }
  }, [toolsModule]);

  return <div>
    home works
    <button onClick={() => toolsModule.sharedSubject.next("hello")}>发布</button>
  </div>;
}
