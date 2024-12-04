import { Button } from "reactstrap";
import "../styles/mainpage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainPage() {
  document.body.className = "homepage-body";

  const history = useHistory();

  function aciktim() {
    history.push("/order");
  }

  return (
    <>
      <section className="main-page-section">
        <img
          src="../../Assets/Iteration-1-assets/logo.svg"
          className="main-logo"
        />
        <h2 className="main-h2">
          <span>KOD</span> <span> ACIKTIRIR</span>
        </h2>
        <h2 className="main-h2">
          <span>PİZZA, </span> <span>DOYURUR</span>
        </h2>
        <Button type="button" className="button-aciktim" onClick={aciktim}>
          ACIKTIM
        </Button>
      </section>
      <div className="nav-menu">
        <img src="../../Assets/Iteration-2-aseets/icons/1.svg" alt="" />
        <span className="nav-menu-item">YENİ! Kore</span>
        <img src="../../Assets/Iteration-2-aseets/icons/2.svg" alt="" />
        <span className="nav-menu-item">Pizza</span>
        <img src="../../Assets/Iteration-2-aseets/icons/3.svg" alt="" />
        <span className="nav-menu-item">Burger</span>
        <img src="../../Assets/Iteration-2-aseets/icons/4.svg" alt="" />
        <span className="nav-menu-item">Kızartmalar</span>
        <img src="../../Assets/Iteration-2-aseets/icons/5.svg" alt="" />
        <span className="nav-menu-item">Fast Food</span>
        <img src="../../Assets/Iteration-2-aseets/icons/6.svg" alt="" />
        <span className="nav-menu-item">Gazlı içecekler</span>
      </div>

      <NavBar />
      <Footer />
    </>
  );
}
