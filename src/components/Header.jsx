import "../styles/header.css";
import headerImg from "../../Assets/Iteration-1-assets/logo.svg";

export default function Header() {
  document.body.className = "header-body";

  return (
    <>
      <div className="header-container">
        <h1 className="header-title">
          <img src={headerImg} alt="" />
        </h1>
      </div>
    </>
  );
}
