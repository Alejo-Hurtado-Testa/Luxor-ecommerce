import { useEffect, useState } from 'react';
import Itemlist from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [listadoProductos, setListadoProductos] = useState([]);
  const productos = [
    {
      id: 1,
      title: 'Smirnoff Raspberry',
      picture: '/img/smirnoffraspberry.png',
      price: 10,
      stock: 10,
      initial: 1,
    },
    {
      id: 2,
      title: 'Smirnoff Citric',
      picture: '/img/smirnoffcitric.png',
      price: 15,
      stock: 10,
      initial: 1,
    },
    {
      id: 3,
      title: 'Smirnoff Green Apple',
      picture: '/img/smirnoffgreenapple.png',
      price: 8,
      stock: 10,
      initial: 1,
    },
  ];

  const getProductos = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

  useEffect(() => {
    getProductos().then((res) => {
      setListadoProductos(res);
    });
  }, []);

  console.log(listadoProductos);

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
