import { Button } from "reactstrap";
import "../styles/mainpage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import NavBar from "./NavBar";
import headerImg from "../../Assets/Iteration-1-assets/logo.svg";
import svg1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import svg2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import svg3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import svg4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import svg5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import svg6 from "../../Assets/Iteration-2-aseets/icons/6.svg";

export default function MainPage() {
  document.body.className = "homepage-body";

  const history = useHistory();

  function aciktim() {
    history.push("/order");
  }

  return (
    <>
      <section className="main-page-section">
        <img src={headerImg} className="main-logo" />
        <h2 className="main-h2">
          <span>KOD</span> <span className="qw"> ACIKTIRIR</span>
        </h2>
        <h2 className="main-h2">
          <span>PİZZA, </span> <span className="qw">DOYURUR</span>
        </h2>
        <Button
          data-cy="aciktim-button"
          type="button"
          className="button-aciktim"
          onClick={aciktim}
        >
          ACIKTIM
        </Button>
      </section>
      <div className="nav-menu">
        <img src={svg1} alt="" />
        <span className="nav-menu-item">YENİ! Kore</span>
        <img src={svg2} alt="" />
        <span className="nav-menu-item">Pizza</span>
        <img src={svg3} alt="" />
        <span className="nav-menu-item">Burger</span>
        <img src={svg4} alt="" />
        <span className="nav-menu-item">Kızartmalar</span>
        <img src={svg5} alt="" />
        <span className="nav-menu-item">Fast Food</span>
        <img src={svg6} alt="" />
        <span className="nav-menu-item">Gazlı içecekler</span>
      </div>

      <NavBar />
      <Footer />
    </>
  );
}
