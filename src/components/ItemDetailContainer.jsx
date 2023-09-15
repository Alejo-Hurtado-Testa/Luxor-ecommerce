import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import productosJson from '../productos.json';
import { Rings } from 'react-loader-spinner';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
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
    setLoad(true);
    getProducto(id).then((res) => {
      setProduct(res);
      setLoad(false);
    });
  }, [id]);

  if (!product) return null;
  if (load)
    return (
      <Rings
        height="300"
        width="300"
        color="rgb(33, 37, 41)"
        radius="6"
        wrapperStyle={{}}
        wrapperClass="ring-cargando"
        visible={true}
        ariaLabel="rings-loading"
      />
    );

  return (
    <div>
      <h1 className="title-itemdetail">detalle del producto</h1>
      <ItemDetail product={product} />
    </div>
  );
}
