"use client";

import Header from "../components/Header";
import { getCart } from "../store/cart";
import { useEffect, useState } from "react";

export default function CartPage() {
const [cart, setCart] = useState(getCart());

useEffect(() => {
  const interval = setInterval(() => {
    setCart([...getCart()]);
  }, 300);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Header />

      <main
        style={{
          background: "#111",
          minHeight: "100vh",
          color: "white",
          padding: "40px 20px",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ color: "#ffb400", marginBottom: "30px" }}>
          🛒 Ваш кошик
        </h1>

        {cart.length === 0 ? (
          <p>Ваш кошик порожній.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1b1b1b",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.price} грн</p>
            </div>
          ))
        )}
      </main>
    </>
  );
}