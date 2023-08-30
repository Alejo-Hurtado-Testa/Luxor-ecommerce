import Item from './Item';

export default function Itemlist({ items }) {
  console.log(items);
  console.log(items.id);
  return (
    <div>
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          picture={item.picture}
          price={item.price}
          stock={item.stock}
          initial={item.initial}
        />
      ))}
    </div>
  );
}
