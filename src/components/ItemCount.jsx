import { useState } from "react";
import "./styles/ItemCount.css";

const ItemCount = ({ stock }) => {
  const [count, setCounts] = useState(0);

  const handleItemDecrease = () => {
    if (count > 0) {
      setCounts(count - 1);
    }
  };

  const handleItemIncrease = () => {
    setCounts(count + 1);
  };

  const addTo = () => {
    if (count <= stock && count > 0) {
      alert(`You added ${count} items to your cart!`);
    } else if (count === 0) {
      alert("You need to select at least 1 item.");
    } else {
      alert(`Not enough stock.`);
    }
  };

  return (
    <div className="controls">
      <div className="count-divs">
        <button onClick={handleItemDecrease} className="decrease-button">
          -
        </button>
      </div>
      <div className="count-divs">
        <p className="item-count">{count}</p>
      </div>
      <div className="count-divs">
        <button onClick={handleItemIncrease} className="increase-button">
          +
        </button>
      </div>
      <div className="count-divs">
        <button className="add-button" onClick={addTo}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
