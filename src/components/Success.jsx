import "../styles/success.css";
import Footer from "./Footer";
import "../styles/footer.css";
import "../styles/mainpage.css";
import { queryAllByAltText } from "@testing-library/react";

export default function Success(props) {
  document.body.className = "success-body";

  const { appForm, appQuantity } = props;
  console.log(appForm);

  const pricePerItem = 85.5;
  const extraPrice = 5;
  const total = pricePerItem + extraPrice * appForm.extras.length;

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
              <p>{(extraPrice * appForm.extras.length).toFixed(2)}</p>
            </div>
            <div className="toplam">
              <p>Toplam</p>
              <p>{(total * appQuantity).toFixed(2)}</p>
            </div>
            <div className="adet">
              <p>Adet</p>
              <p>{appQuantity}</p>
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
