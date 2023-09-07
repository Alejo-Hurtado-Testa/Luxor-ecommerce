import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [load, setLoad] = useState(true);
  const { tipo } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setLoad(false));
  }, [tipo]);

  if (!product) return null;
  if (load)
    return (
      <div>
        <h1 className="title-cargando">CARGANDO....</h1>
      </div>
    );

  return (
    <div>
      <h1>DETALLE</h1>
      <ItemDetail products={product} />
    </div>
  );
}
