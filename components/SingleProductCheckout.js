import React, { useState } from 'react';

export default function SingleProductCheckout(props) {
    const [count, setCount] = useState(1);

    function modifyQuantity(e) {
        e.preventDefault();
        if (e.target.value === "+") setCount(count + 1);
        if (e.target.value === "-" && count > 1) setCount(count - 1);
    }

    return (
        <form className="single-product-checkout" action="/api/checkout_sessions" method="POST">

            <section className="quantity-selector">
                <p>Quantità</p>
                <input placeholder="Quantità" name="quantity" value={count}></input>
                <button onClick={modifyQuantity} value="+">+</button>
                <button onClick={modifyQuantity} value="-">-</button>
            </section>

            <h2>{props.price * count}€</h2>

            <input style={{ display: "none" }} name="stripePriceId" value={props.stripePriceId}></input>
            <button type="submit" role="link">
                Acquista
            </button>
        </form>
    )
}

