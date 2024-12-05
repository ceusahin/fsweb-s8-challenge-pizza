import "../styles/advertcard.css";

export default function AdvertCard2() {
  return (
    <>
      <div className="advert-menu">
        <article className="advert-menu-item">
          <img src="../../Assets/Iteration-2-aseets/icons/1.svg" alt="" />
          <span>YENİ! Kore</span>
        </article>
        <article className="advert-menu-item bg-black">
          <img src="../../Assets/Iteration-2-aseets/icons/2.svg" alt="" />
          <span>Pizza</span>
        </article>
        <article className="advert-menu-item">
          <img src="../../Assets/Iteration-2-aseets/icons/3.svg" alt="" />
          <span>Burger</span>
        </article>
        <article className="advert-menu-item">
          <img src="../../Assets/Iteration-2-aseets/icons/4.svg" alt="" />
          <span>Kızartmalar</span>
        </article>
        <article className="advert-menu-item">
          <img src="../../Assets/Iteration-2-aseets/icons/5.svg" alt="" />
          <span>Fast Food</span>
        </article>
        <article className="advert-menu-item">
          <img src="../../Assets/Iteration-2-aseets/icons/6.svg" alt="" />
          <span>Gazlı içecekler</span>
        </article>
      </div>

      <div className="pizza-cards">
        <article className="pizza-card-item">
          <img
            src="../../Assets/Iteration-2-aseets/pictures/food-1.png"
            alt=""
          />
          <h3>Terminal Pizza</h3>
          <div className="price-ratings-2">
            <div className="user-ratings  ">
              <p className="rating1">4.9</p>
              <p className="rating2">(200)</p>
            </div>
            <p className="price-2">85.50₺</p>
          </div>
        </article>
        <article className="pizza-card-item">
          <img
            src="../../Assets/Iteration-2-aseets/pictures/food-2.png"
            alt=""
          />
          <h3>Position Absolute Acı Pizza</h3>
          <div className="price-ratings-2">
            <div className="user-ratings  ">
              <p className="rating1">4.9</p>
              <p className="rating2">(200)</p>
            </div>
            <p className="price-2">85.50₺</p>
          </div>
        </article>
        <article className="pizza-card-item">
          <img
            src="../../Assets/Iteration-2-aseets/pictures/food-3.png"
            alt=""
          />
          <h3>useEffect Tavuklu Burger</h3>
          <div className="price-ratings-2">
            <div className="user-ratings  ">
              <p className="rating1">4.9</p>
              <p className="rating2">(200)</p>
            </div>
            <p className="price-2">85.50₺</p>
          </div>
        </article>
      </div>
    </>
  );
}
