import React from "react";
// import "./app.css";
// import "./app.less";
import "./app.scss";
import ph1 from "./assets/imgs/ph.png";
import ph2 from "./assets/imgs/phs.png";
function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <img src={ph1} alt="小于10kb的图片" />
      <img src={ph2} alt="大于于10kb的图片" />
      <img src={require("./assets/imgs/phs.png")} alt="大于于10kb的图片" />
    </div>
  );
}
export default App;
