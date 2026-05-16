// TakeAwayButton.jsx
// ปุ่ม Take Away สำหรับสั่งกลับบ้าน

export function TakeAwayButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#0f766e",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        padding: "12px 28px",
        fontSize: "1rem",
        fontWeight: "700",
        fontFamily: "'Sarabun', sans-serif",
        cursor: "pointer",
        boxShadow: "0 3px 12px rgba(15,118,110,0.35)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(15,118,110,0.45)";
        e.currentTarget.style.backgroundColor = "#0d9488";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 3px 12px rgba(15,118,110,0.35)";
        e.currentTarget.style.backgroundColor = "#0f766e";
      }}
    >
      🛍️ Take away
    </button>
  );
}