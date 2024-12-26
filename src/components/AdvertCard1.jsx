import "../styles/advertcard.css";

export default function AdvertCard1() {
  return (
    <section className="advert1">
      <article className="cards">
        <div className="card-left">
          <h2>Özel</h2>
          <h2>Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <button className="advert-button">SİPARİŞ VER</button>
        </div>
        <div className="card-right">
          <div className="card-right-1">
            <h2>
              Hackathlon <br /> Burger Menü
            </h2>
            <button className="advert-button">SİPARİŞ VER</button>
          </div>
          <div className="card-right-2">
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
