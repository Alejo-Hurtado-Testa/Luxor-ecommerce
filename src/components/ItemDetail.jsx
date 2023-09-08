import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  return (
    <div>
      <div>
        {product.map((item) => (
          <div className="container-detail" key={item.id}>
            <div>
              <h1 className="title-detail">{item.title}</h1>
              <img src={item.picture} alt="" width={400} />
            </div>
            <div>
              <p className="item-detail">
                Descripcion: <span>{item.description}</span>
              </p>
              <p className="item-detail">
                Categoria: <span>{item.category}</span>
              </p>
              <p className="item-detail">
                Precio: $<span>{item.price}</span>
              </p>
              <div className="count-detail">
                <ItemCount stock={item.stock} initial={item.initial} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
