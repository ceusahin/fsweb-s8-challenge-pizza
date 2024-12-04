import "../styles/success.css";
import Footer from "./Footer";
import "../styles/footer.css";

export default function Success() {
  document.body.className = "success-body";

  return (
    <>
      <div className="success-main">
        <img
          className="success-logo"
          src="../../Assets/Iteration-1-assets/logo.svg"
          alt=""
        />
        <div className="success-text">
          <h3>lezzetin yolda</h3>
          <h2>SİPARİŞ ALINDI</h2>
        </div>

        <article className="order-recap">
          <h3>Position Absolute Burger</h3>
          <div className="recap-details">
            <ul>
              <li>Boyut: </li>
              <li>Hamur: </li>
              <li>Ek Malzemeler: </li>
            </ul>
          </div>
        </article>

        <div className="recap-price">
          <p className="toplam-text">Sipariş Toplamı</p>
          <div className="recap-order">
            <div className="secimler">
              <p>Seçimler</p>
              <p>123</p>
            </div>
            <div className="toplam">
              <p>Toplam</p>
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
