import { ItemWithDetail } from "./Item.jsx";

const ItemDetails = ({ products }) => {
  return (
    <div className="detail-container">
      <ItemWithDetail
        id={products.id}
        name={products.name}
        description={products.description}
        price={products.price}
        stock={products.stock}
        imgSrc={products.imgSrc}
      />
    </div>
  );
};

export default ItemDetails;
