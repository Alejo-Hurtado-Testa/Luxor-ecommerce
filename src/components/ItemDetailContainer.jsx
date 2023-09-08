import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import productosJson from '../productos.json';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  const getProducto = (idproduct) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (idproduct) {
          const productosFiltrados = productosJson.find(
            (product) => product.id == idproduct
          );
          resolve(productosFiltrados);
        } else {
          return alert('NO SE ENCONTRARON PRODUCTOS');
        }
      }, 2000);
    });

  useEffect(() => {
    getProducto(id).then((res) => {
      setProduct(res);
      setLoad(false);
    });
  }, [id]);

  if (!product) return null;
  if (load)
    return (
      <div>
        <h2 className="title-cargando">CARGANDO....</h2>
      </div>
    );

  return (
    <div>
      <h1 className="title-itemdetail">detalle del producto</h1>
      <ItemDetail product={product} />
    </div>
  );
}
