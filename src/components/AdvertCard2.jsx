import "../styles/advertcard.css";
import svg1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import svg2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import svg3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import svg4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import svg5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import svg6 from "../../Assets/Iteration-2-aseets/icons/6.svg";
import food1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import food2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import food3 from "../../Assets/Iteration-2-aseets/pictures/food-3.png";

export default function AdvertCard2() {
  return (
    <>
      <div className="advert-menu">
        <article className="advert-menu-item">
          <img src={svg1} alt="" />
          <span>YENİ! Kore</span>
        </article>
        <article className="advert-menu-item bg-black">
          <img src={svg2} alt="" />
          <span>Pizza</span>
        </article>
        <article className="advert-menu-item">
          <img src={svg3} alt="" />
          <span>Burger</span>
        </article>
        <article className="advert-menu-item">
          <img src={svg4} alt="" />
          <span>Kızartmalar</span>
        </article>
        <article className="advert-menu-item">
          <img src={svg5} alt="" />
          <span>Fast Food</span>
        </article>
        <article className="advert-menu-item">
          <img src={svg6} alt="" />
          <span>Gazlı içecekler</span>
        </article>
      </div>

      <div className="pizza-cards">
        <article className="pizza-card-item">
          <img src={food1} alt="" />
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
          <img src={food2} alt="" />
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
          <img src={food3} alt="" />
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
