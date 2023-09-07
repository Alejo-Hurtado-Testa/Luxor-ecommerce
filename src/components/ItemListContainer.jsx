import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import productosJson from '../productos.json';
import { useParams } from 'react-router-dom';

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
    getProductos(tipo).then((res) => {
      setListadoProductos(res);
      setLoading(false);
    });
  }, [tipo]);

  if (!listadoProductos) return [];
  if (loading)
    return (
      <h2 className="title-cargando">
        Cargando Productos, espera por favor...
      </h2>
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
