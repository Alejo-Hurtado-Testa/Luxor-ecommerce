import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  return (
    <div>
      <div>
        <div className="container-detail" key={product.id}>
          <div>
            <h1 className="title-detail">{product.title}</h1>
            <img src={product.picture} alt="" width={400} />
          </div>
          <div>
            <p className="item-detail">
              Descripcion: <span>{product.description}</span>
            </p>
            <p className="item-detail">
              Categoria: <span>{product.category}</span>
            </p>
            <p className="item-detail">
              Precio: $<span>{product.price}</span>
            </p>
            <div className="count-detail">
              <ItemCount stock={product.stock} initial={product.initial} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
