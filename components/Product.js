import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

export default function Product({ price, stripePriceId }) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { addItem, items } = useCart();

  function modifyQuantity(e) {
    if (e.target.value === "+") setQuantity(quantity + 1);
    if (e.target.value === "-" && quantity > 1) setQuantity(quantity - 1);
  }

  function addToCart(e) {
    addItem({ id: stripePriceId, name: "Olio", price: price }, quantity);
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        sx={{
          marginBottom: "2rem",
        }}
      >
        <MuiAlert severity="success">
          Aggiunto al{" "}
          <Link href="/cart">
            <a>carrello</a>
          </Link>
          .
        </MuiAlert>
      </Snackbar>

      <section className="product">
        <p className="price">{price + "€"}</p>
        <p className="quantity">Quantità</p>
        <section className="change-quantity">
          <input value={quantity}></input>
          <button onClick={modifyQuantity} value="+">
            +
          </button>
          <button onClick={modifyQuantity} value="-">
            -
          </button>
        </section>
        <button
          className="add-to-cart"
          onClick={(e) => {
            setOpen(true);
            !open && addToCart(e);
          }}
        >
          Aggiungi al carrello
        </button>
      </section>
    </>
  );
}
