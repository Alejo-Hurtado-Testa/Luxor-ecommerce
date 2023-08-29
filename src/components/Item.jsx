import ItemCount from './ItemCount';

export default function Item({ id, title, picture, price, stock, initial }) {
  return (
    <div className="producto">
      <h1 className="name-produc" key={id}>
        {title}
      </h1>
      <img src={picture} alt={title} />
      <h2>${price}</h2>
      <h2 className="detail-produc">Ver detalles del producto</h2>
      <ItemCount stock={stock} initial={initial} />
    </div>
  );
}
