import "./styles.css";
import logo from "./logo.png";
export default function App() {
  return (
    <div className="main">
      <div className="header-con">
        <img src={logo} alt="logo" />
        <h1>
          Digital <span>Dose</span>
        </h1>
        <h2>Cases</h2>
        <label>
          <input type="search" name="seacrch-bar" value="seachhere" />
        </label>
      </div>
    </div>
  );
}
