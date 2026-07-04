import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#0f0f0f",
        borderBottom: "1px solid #2a2a2a",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#ffb400", margin: 0 }}>
          🍣 UMI SUSHI
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Головна
          </Link>

          <Link href="/menu" style={{ color: "white", textDecoration: "none" }}>
            Меню
          </Link>

          <Link href="/delivery" style={{ color: "white", textDecoration: "none" }}>
            Доставка
          </Link>

          <Link href="/contacts" style={{ color: "white", textDecoration: "none" }}>
            Контакти
          </Link>

          <Link
            href="/cart"
            style={{
              background: "#ffb400",
              color: "#111",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🛒 Кошик
          </Link>
        </nav>
      </div>
    </header>
  );
}