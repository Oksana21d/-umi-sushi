export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "#111",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          marginBottom: "20px",
          color: "#ffb400",
        }}
      >
        UMI SUSHI
      </h1>

      <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
        Найсмачніші суші у Покрові 🍣
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#ccc",
          marginBottom: "40px",
        }}
      >
        Свіжі інгредієнти • Швидка доставка • Великі порції
      </p>

      <button
        style={{
          background: "#ffb400",
          color: "#111",
          border: "none",
          padding: "18px 40px",
          borderRadius: "12px",
          fontSize: "20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Замовити зараз
      </button>
    </section>
  );
}