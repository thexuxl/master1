import React, { useState } from "react";
// import "./app.css";
import "./app.less";
// import "./app.scss";
import ph1 from "@/assets/imgs/ph.png";
import ph2 from "@/assets/imgs/phs.png";
import { Demo1, Demo2 } from "@/comments";
import Demo3 from "./comments/Demo3";
function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <div>
      <div className="smallImg"></div>
      <img src={ph1} alt="小于10kb的图片" />
      <img src={ph2} alt="大于于10kb的图片sa---" />
      <img src={require("./assets/imgs/phs.png")} alt="大于于10kb的图片" />
      <img src={require("./assets/imgs/ph.png")} alt="大于于10kb的图片" />
      <Demo1 />
      <Demo3 />
    </div>
  );
}
export default App;
