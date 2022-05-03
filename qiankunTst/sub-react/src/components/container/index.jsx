import { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';

export const MicroApp = (props) => {
  let microAppRef = null;

  useEffect(() => {
    const { name, entry } = props;
    // * 加载容器
    microAppRef = loadMicroApp({ name, entry, container: '#container' });
    return () => {
      // * 卸载
      microAppRef.mountPromise.then(() => microAppRef.unmount());
    }
  }, []);

  return <div id="$container" />
}
