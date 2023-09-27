import { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from '../context/cartContext';

export default function Checkout() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cartList } = useContext(CartContext);

  console.log(cartList);
  const crearOrden = () => {
    const order = {
      buyer: { name: nombre, phone: telefono, email: correo },
      items: [{ id: '', title: '', price: '', quantity: '' }],
      total: 1324,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, 'ordenes');
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div>
      <h1 className="title-fina-compra">finalizando la compra</h1>
      <h2 className="title-fina-datos">completa con tus datos!</h2>
      <form className="form-finalizar">
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          className="input-finalizar"
        />
        <input
          type="text"
          value={correo}
          placeholder="Email"
          onChange={(e) => setCorreo(e.target.value)}
          className="input-finalizar"
        />
        <input
          type="text"
          value={telefono}
          placeholder="Numero"
          onChange={(e) => setTelefono(e.target.value)}
          className="input-finalizar"
        />
        <button className="btn-finalizar-checkout">Finalizar compra</button>
      </form>
    </div>
  );
}
