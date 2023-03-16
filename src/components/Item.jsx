import ItemCount from "./ItemCount.jsx";

const Item = ({ itemId, name, imgSrc }) => {
  return (
    <div className="card" key={itemId}>
      <li className="card-body">
        <h3 className="card-title">{name}</h3>
        <img src={imgSrc}></img>
      </li>
    </div>
  );
};

const ItemWithDetail = ({ id, name, description, price, stock, imgSrc }) => {
  return (
    <div className="card-detail" key={id}>
      <li className="card-body-detail">
        <h3 className="card-title-detail">{name}</h3>
        <img src={imgSrc}></img>
        <p className="description">{description}</p>
        <p>
          Price: <span className="price">${price}</span>
        </p>
      </li>
      <ItemCount stock={stock} />
      <p className="stock">Stock: {stock}</p>
    </div>
  );
};

export { Item };
export { ItemWithDetail };
