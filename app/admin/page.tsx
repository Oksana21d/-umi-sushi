export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
        UMI Sushi — Адмін-панель
      </h1>

      <p style={{ marginBottom: "40px" }}>
        Ласкаво просимо! Тут ти зможеш керувати своїм сайтом.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ background: "#1b1b1b", padding: "25px", borderRadius: "15px" }}>
          🍣 Меню
        </div>

        <div style={{ background: "#1b1b1b", padding: "25px", borderRadius: "15px" }}>
          🏷️ Акції
        </div>

        <div style={{ background: "#1b1b1b", padding: "25px", borderRadius: "15px" }}>
          📸 Фото
        </div>

        <div style={{ background: "#1b1b1b", padding: "25px", borderRadius: "15px" }}>
          ⚙️ Налаштування
        </div>
      </div>
    </main>
  );
}