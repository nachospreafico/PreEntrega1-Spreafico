import { useEffect, useState } from "react";
import ItemDetails from "./ItemDetails.jsx";
import Products from "../mocks/products";
import "./styles/ItemDetailContainer.css";
import ItemCount from "./ItemCount.jsx";

const ItemDetailContainer = ({ itemId }) => {
  const [products, setProducts] = useState([]);
  let itemIndex = null;

  useEffect(() => {
    const promisedItem = new Promise((resolve) =>
      setTimeout(() => resolve(Products), 2000)
    );

    promisedItem
      .then((response) => {
        const filteredItem = response.find((item) => item.id == itemId);
        console.log(filteredItem);
        setProducts(filteredItem);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Products were loaded"));
  }, [itemId]);

  return (
    <div>
      <ItemDetails products={products} />
    </div>
  );
};

export default ItemDetailContainer;
