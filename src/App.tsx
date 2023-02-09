import React, { useState } from "react";
// import "./app.css";
import "./app.less";
// import "./app.scss";
import ph1 from "@/assets/imgs/ph.png";
import ph2 from "@/assets/imgs/phs.png";
function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <div>
      <h2>webpack5-react-tssssaaa--333---444--</h2>
      <img src={ph1} alt="小于10kb的图片" />
      <img src={ph2} alt="大于于10kb的图片sa---" />
      <img src={require("./assets/imgs/phs.png")} alt="大于于10kb的图片" />
      <img src={require("./assets/imgs/ph.png")} alt="大于于10kb的图片" />
      <div>ceshi </div>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </div>
  );
}
export default App;
