// TableCard.jsx
// แสดงโต๊ะแต่ละใบพร้อมสถานะสี

const STATUS_STYLES = {
  available: {
    bg: "#86efac",
    hover: "#4ade80",
    text: "#166534",
    label: "โต๊ะว่าง",
  },
  pending: {
    bg: "#fbbf24",
    hover: "#f59e0b",
    text: "#78350f",
    label: "รอสั่ง",
  },
  occupied: {
    bg: "#f87171",
    hover: "#ef4444",
    text: "#7f1d1d",
    label: "มีลูกค้าใช้งาน",
  },
};

export function TableCard({ tableNumber, status = "available", onClick }) {
  const style = STATUS_STYLES[status];

  return (
    <button
      onClick={() => onClick?.({ tableNumber, status })}
      title={`โต๊ะ ${tableNumber} — ${style.label}`}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        border: "none",
        borderRadius: "12px",
        width: "100%",
        aspectRatio: "4/3",
        fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
        fontWeight: "700",
        fontFamily: "'Sarabun', sans-serif",
        cursor: status === "occupied" ? "not-allowed" : "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (status !== "occupied") {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.18)";
          e.currentTarget.style.backgroundColor = style.hover;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
        e.currentTarget.style.backgroundColor = style.bg;
      }}
    >
      {tableNumber}
    </button>
  );
}

export { STATUS_STYLES };