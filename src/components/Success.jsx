import "../styles/success.css";
import Footer from "./Footer";
import "../styles/footer.css";
import "../styles/mainpage.css";

export default function Success(props) {
  document.body.className = "success-body";

  const { appForm } = props;
  console.log(appForm);

  let extrasStr = "";

  for (let i = 0; i < appForm.extras.length; i++) {
    extrasStr = extrasStr + `${appForm.extras[i]}`;

    if (appForm.extras[i] == appForm.extras[appForm.extras.length - 1]) {
      break;
    }

    extrasStr = extrasStr + `,   `;
  }

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
              <li>
                Boyut: <span className="dynamic-bold">{appForm.size}</span>
              </li>
              <li>
                Hamur: <span className="dynamic-bold">{appForm.pastry}</span>
              </li>
              <li>
                Ek Malzemeler:
                <span className="dynamic-bold">{extrasStr}</span>
              </li>
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
        <button className="main-p-button button-aciktim">
          <a href="/">Ana Sayfa</a>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
