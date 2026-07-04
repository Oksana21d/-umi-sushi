"use client";

import { addToCart } from "../store/cart";

export default function AddToCartButton() {
  return (
    <button
      onClick={() => {
        addToCart({
          id: 1,
          name: "Філадельфія з лососем",
          price: 310,
        });

        alert("✅ Рол додано в кошик!");
      }}
      style={{
        marginTop: "15px",
        background: "#ffb400",
        color: "#111",
        border: "none",
        padding: "12px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      🛒 Додати в кошик
    </button>
  );
}