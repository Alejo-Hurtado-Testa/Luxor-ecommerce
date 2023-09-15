import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import productosJson from '../productos.json';
import { useParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';

const ItemListContainer = () => {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipo } = useParams();

  const getProductos = (categoria) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (!categoria) {
          resolve(productosJson);
        } else {
          const productosFiltrados = productosJson.filter(
            (product) => product.category === categoria
          );
          resolve(productosFiltrados);
        }
      }, 2000);
    });

  useEffect(() => {
    setLoading(true);
    getProductos(tipo).then((res) => {
      setListadoProductos(res);
      setLoading(false);
    });
  }, [tipo]);

  if (!listadoProductos) return [];
  if (loading)
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
      <h1 className="title-main">
        Bienvenidos a Luxor! Te acompañamos adonde sea.
      </h1>
      <div className="productos-main">
        <Itemlist items={listadoProductos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
