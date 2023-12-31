import { Row } from 'react-bootstrap';
import Item from './Item';

export default function Itemlist({ items }) {
  return (
    <Row className="itemlist-main">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          picture={item.picture}
          price={item.price}
          stock={item.stock}
          initial={item.initial}
        />
      ))}
    </Row>
  );
}
