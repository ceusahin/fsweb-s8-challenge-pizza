import "../styles/advertcard.css";
import kart1 from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import kart2 from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import kart3 from "../../Assets/Iteration-2-aseets/cta/kart-3.png";

export default function AdvertCard1() {
  return (
    <section className="advert1">
      <article className="cards">
        <div className="card-left" style={{ backgroundImage: `url(${kart1})` }}>
          <h2>Özel</h2>
          <h2>Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <button className="advert-button">SİPARİŞ VER</button>
        </div>
        <div className="card-right">
          <div
            className="card-right-1"
            style={{ backgroundImage: `url(${kart2})` }}
          >
            <h2>
              Hackathlon <br /> Burger Menü
            </h2>
            <button className="advert-button">SİPARİŞ VER</button>
          </div>
          <div
            className="card-right-2"
            style={{ backgroundImage: `url(${kart3})` }}
          >
            <h2>
              <span>Çoooook</span> hızlı <br /> npm gibi kurye
            </h2>
            <button className="advert-button">SİPARİŞ VER</button>
          </div>
        </div>
      </article>

      <article className="advert-headers">
        <h2 className="heading-1">
          <span>en çok siparis edilen menüler</span>
          <br />
          Acıktıran Kodlara Doyuran Lezzetler
        </h2>
      </article>
    </section>
  );
}
