import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const ItemListContainer = () => {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipo } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    if (!tipo) {
      const itemsCollection = collection(db, 'bebidas');
      setTimeout(() => {
        getDocs(itemsCollection).then((snapshot) => {
          setListadoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoading(false);
        });
      }, 2000);
    } else {
      const q = query(collection(db, 'bebidas'), where('category', '==', tipo));
      setTimeout(() => {
        getDocs(q).then((snapshot) => {
          setListadoProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoading(false);
        });
      }, 2000);
    }
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
