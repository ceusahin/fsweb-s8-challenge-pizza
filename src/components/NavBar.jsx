import "../styles/navbar.css";
import AdvertCard1 from "./AdvertCard1";
import AdvertCard2 from "./AdvertCard2";

export default function NavBar() {
  return (
    <section className="navbar-section">
      <AdvertCard1></AdvertCard1>
      <AdvertCard2></AdvertCard2>
    </section>
  );
}
