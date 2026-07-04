import Header from "./components/Header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <section
          style={{
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              marginBottom: "20px",
            }}
          >
            🍣 UMI SUSHI
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#ccc",
              marginBottom: "40px",
            }}
          >
            Свіжі роли • Доставка • Покров
          </p>

          <a
            href="/menu"
            style={{
              background: "#ff4d6d",
              color: "white",
              padding: "16px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Переглянути меню
          </a>
        </section>

        <section
          style={{
            padding: "60px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Чому обирають нас?
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#1b1b1b",
                padding: "30px",
                borderRadius: "16px",
                width: "300px",
                textAlign: "center",
              }}
            >
              <h3>🍣 Свіжі продукти</h3>
              <p>Щодня використовуємо тільки якісні інгредієнти.</p>
            </div>

            <div
              style={{
                background: "#1b1b1b",
                padding: "30px",
                borderRadius: "16px",
                width: "300px",
                textAlign: "center",
              }}
            >
              <h3>🚚 Швидка доставка</h3>
              <p>Швидко доставляємо замовлення по Покрову.</p>
            </div>

            <div
              style={{
                background: "#1b1b1b",
                padding: "30px",
                borderRadius: "16px",
                width: "300px",
                textAlign: "center",
              }}
            >
              <h3>❤️ Готуємо з любов'ю</h3>
              <p>Кожен рол готуємо тільки після оформлення замовлення.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}