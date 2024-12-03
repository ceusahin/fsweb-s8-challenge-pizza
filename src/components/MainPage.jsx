import { Button } from "reactstrap";
import "../styles/mainpage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MainPage() {
  document.body.className = "homepage-body";

  const history = useHistory();

  function aciktim() {
    history.push("/order");
  }

  return (
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
  );
}
