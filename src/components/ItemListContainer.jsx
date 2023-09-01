import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import bebidasJson from '../bebidas.json';

const ItemListContainer = ({ greeting }) => {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductos = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(bebidasJson);
      }, 2000);
    });

  useEffect(() => {
    getProductos().then((res) => {
      setListadoProductos(res);
      setLoading(false);
    });
  }, []);

  if (!listadoProductos) return [];
  if (loading)
    return (
      <h2 className="title-cargando">
        Cargando Productos, espera por favor...
      </h2>
    );

  return (
    <div>
      <h1 className="title-main">{greeting}</h1>
      <div className="productos-main">
        <Itemlist items={listadoProductos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
