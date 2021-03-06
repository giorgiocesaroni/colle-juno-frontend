import { useCart } from "react-use-cart";
import Link from "next/link";

export default function Cart(props) {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  console.log(items);

  if (isEmpty)
    return (
      <main className="cart centered">
        <div>
          <p>Il tuo carrello è vuoto.</p>
          <p>
            Aggiungi dei <Link href="/products">prodotti</Link>.
          </p>
        </div>
      </main>
    );

  return (
    <section className="cart">
      <h1>Carrello ({totalUniqueItems})</h1>
      {items.map((item) => (
        <section className="product" key={item.id}>
          <h2>{item.name}</h2>
          <section className="change-quantity">
            <input value={item.quantity}></input>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </section>
          <p className="price">{item.price}€</p>
        </section>
      ))}
    </section>
  );
}
