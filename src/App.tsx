import React, { useState, lazy, Suspense } from "react";
// import "./app.css";
import "./app.less";
import styles from "./app.less"
// import "./app.scss";
import ph1 from "@/assets/imgs/ph.png";
import ph2 from "@/assets/imgs/phs.png";
import { Demo1, Demo2 } from "@/comments";
const LazyDemo = lazy(() => import("@/comments/LazyDemo"));

// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      "@/comments/PreFetchDemo"
    )
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      "@/comments/PreloadDemo"
    )
);

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  const [show, setShow] = useState(false);

  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import("./app.css");
    setShow(!show);
  };
  return (
    <div>
      <div className={styles.title}>weqjnkj</div>
      <div className="smallImg">sadfadsfsa</div>

      {/* <img src={require("./assets/imgs/phs.png")} alt="大于于10kb的图片" />
      <img src={require("./assets/imgs/ph.png")} alt="大于于10kb的图片" /> */}
      <Demo1 />
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && (
        <>
          <Suspense fallback={null}>
            <LazyDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreloadDemo />
            <LazyDemo />
            <PreFetchDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
      {show && <div>测试试试</div>}
    </div>
  );
}
export default App;
