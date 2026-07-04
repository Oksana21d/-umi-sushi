import Header from "../components/Header";
import AddToCartButton from "../components/AddToCartButton";
import { menu } from "../data/menu";

export default function MenuPage() {
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              color: "#ffb400",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            🍣 Меню UMI Sushi
          </h1>

          {menu.map((category) => (
            <div key={category.category} style={{ marginBottom: "50px" }}>
              <h2
                style={{
                  color: "#ffb400",
                  marginBottom: "25px",
                  borderBottom: "2px solid #333",
                  paddingBottom: "10px",
                }}
              >
                {category.category}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "20px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: "#1b1b1b",
                      borderRadius: "15px",
                      padding: "20px",
                    }}
                  >
                    <h3>{item.name}</h3>

                    <p style={{ color: "#999" }}>{item.weight}</p>

                    <p>{item.description}</p>

                    <h2 style={{ color: "#ffb400" }}>
                      {item.price} грн
                    </h2>

                    <AddToCartButton />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}