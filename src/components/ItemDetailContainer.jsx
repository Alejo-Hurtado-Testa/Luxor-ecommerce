import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return null;

  return (
    <div>
      <h1>DETALLE</h1>
      <ItemDetail products={product} />
    </div>
  );
}
