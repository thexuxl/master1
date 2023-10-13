import React, { useState, lazy, Suspense,useRef } from "react";
// import "./app.css";
import "./app.less";
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
  let ref = useRef(0);
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  const [show, setShow] = useState(false);

  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import("./app.css");
    console.log("dev")
    setShow(!show);
  };
  function handleClick() {
    console.log("dev")
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <div>
       <button onClick={handleClick}>
      Click me!
    </button>
    </div>
  );
}
export default App;
