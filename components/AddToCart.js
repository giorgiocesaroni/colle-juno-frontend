import React, { useState } from 'react';
import { setCookies, getCookie } from 'cookies-next';

export default function AddToCart({ stripePriceId }) {
    const [count, setCount] = useState(1);

    function modifyQuantity(e) {
        e.preventDefault();
        if (e.target.value === "+") setCount(count + 1);
        if (e.target.value === "-" && count > 1) setCount(count - 1);
    }

    function addToCart(e) {
        if (!getCookie(stripePriceId)) {
            setCookies(stripePriceId, 0);
        }
        setCookies(stripePriceId, Number(getCookie(stripePriceId)) + count);
    }

    return (
        <section className="quantity-selector">
            <p>Quantità</p>
            <input placeholder="Quantità" name="quantity" value={count}></input>
            <button onClick={modifyQuantity} value="+">+</button>
            <button onClick={modifyQuantity} value="-">-</button>
            <button onClick={addToCart}>Aggiungi al carrello</button>
        </section>
    )
}

