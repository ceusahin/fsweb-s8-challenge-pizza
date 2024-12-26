import "../styles/footer.css";
import footer1 from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import location from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import mail from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import phone from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import li0 from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import li1 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import li2 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import li3 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import li4 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import li5 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png";
export default function Footer() {
  document.body.className = "footer-body";
  return (
    <footer>
      <section className="main-footer">
        <div className="comm-container">
          <img src={footer1} alt="" className="footer-logo" />
          <div className="comm-details">
            <div className="location">
              <img src={location} alt="" className="img-space" />
              <span className="location-text">
                341 Londonderry Road, <br />{" "}
                <span className="ist">Istanbul Türkiye</span>
              </span>
            </div>
            <div className="mail">
              <img src={mail} alt="" className="img-space" />
              <span className="mail-text">aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="phone">
              <img src={phone} alt="" className="img-space" />
              <span className="phone-text">+90 216 123 45 67</span>
            </div>
          </div>
        </div>

        <div className="pizza-list">
          <h2>Hot Menu</h2>
          <ul className="pizza-list-ul">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="insta">
          <h2>Instagram</h2>
          <div className="insta-imgs">
            <img src={li0} alt="" />

            <img src={li1} alt="" />

            <img src={li2} alt="" />

            <img src={li3} alt="" />

            <img src={li4} alt="" />

            <img src={li5} alt="" />
          </div>
        </div>
      </section>
      <section className="child-footer">
        <div className="copyrights">© 2023 Teknolojik Yemekler</div>
        <p>twitter</p>
      </section>
    </footer>
  );
}
