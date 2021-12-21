import React, { useState } from "react";
import { useCart } from "react-use-cart";

export default function Product({ price, stripePriceId }) {
    const [quantity, setQuantity] = useState(1);
    const { addItem, items } = useCart();

    function modifyQuantity(e) {
        if (e.target.value === "+") setQuantity(quantity + 1);
        if (e.target.value === "-" && quantity > 1) setQuantity(quantity - 1);
    }

    function addToCart(e) {
        addItem({ id: stripePriceId, name: "Olio", price: price }, quantity)
    }

    return (
        <section className="product">
            <p className="price">{price + "€"}</p>
            <p className="quantity">Quantità</p>
            <section className="change-quantity">
                <input value={quantity}></input>
                <button onClick={modifyQuantity} value="+">+</button>
                <button onClick={modifyQuantity} value="-">-</button>
            </section>
            <button className="add-to-cart" onClick={addToCart}>Aggiungi al carrello</button>
        </section>
    )
}

