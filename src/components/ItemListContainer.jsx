import { useEffect, useState } from "react";
import "./styles/ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import Products from "../mocks/products";

const ItemListContainer = ({ categoryId, isCategoryRoute }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promisedProducts = new Promise((resolve) =>
      setTimeout(() => resolve(Products), 2000)
    );

    promisedProducts
      .then((response) => {
        if (isCategoryRoute) {
          const filteredProducts = response.filter((product) => {
            return product.category === categoryId;
          });
          setProducts(filteredProducts);
          console.log({ filteredProducts });
        } else {
          setProducts(response);
        }
      })

      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div className="div-products">
      <ul>
        <ItemList products={products} />
      </ul>
    </div>
  );
};

export default ItemListContainer;
