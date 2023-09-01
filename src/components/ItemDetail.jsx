export default function ItemDetail({ products }) {
  return (
    <div>
      {products.map((product) => {
        if (product.price > 100) {
          return (
            <div>
              <h1>{product.title}</h1>
              <img src={product.image} alt="" width={400} />
              <p>{product.description}</p>
              <span>{product.price}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
