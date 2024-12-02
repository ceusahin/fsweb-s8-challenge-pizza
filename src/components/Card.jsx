import { Button } from "reactstrap";
import "../styles/card.css";
import { useState } from "react";

export default function Card() {
  document.body.className = "card-body";

  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 1;
  const total = pricePerItem * quantity;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="card">
      <div className="space"></div>
      <div className="quantity-section">
        <Button
          type="button"
          className="quantity-button-left"
          onClick={handleDecrease}
        >
          -
        </Button>
        <div className="quantity">{quantity}</div>
        <Button
          type="button"
          className="quantity-button-right"
          onClick={handleIncrease}
        >
          +
        </Button>
      </div>

      <div className="order-summary">
        <div className="uc">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-row">
            <span className="extras-gains">Seçimler</span>
            <span className="extras-gains">
              {(quantity * pricePerItem).toFixed(2)}₺
            </span>
          </div>
          <div className="summary-row total">
            <span className="extras-red">Toplam</span>
            <span className="extras-red">{total.toFixed(2)}₺</span>
          </div>
        </div>
        <button className="order-button">SİPARİŞ VER</button>
      </div>
    </div>
  );
}
