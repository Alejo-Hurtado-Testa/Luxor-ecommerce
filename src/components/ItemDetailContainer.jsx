import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemRef = doc(db, 'bebidas', id);
    getDoc(itemRef).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
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
