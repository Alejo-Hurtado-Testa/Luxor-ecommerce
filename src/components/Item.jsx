import { Link } from 'react-router-dom';

export default function Item({ id, title, picture, price, stock, initial }) {
  console.log('ID desde ITEM:', id);
  return (
    <div className="producto">
      <h1 className="name-produc">{title}</h1>
      <img src={picture} alt={title} width={300} />
      <Link to={`/item/${id}`} className="detail-produc">
        Ver detalles del producto
      </Link>
    </div>
  );
}
