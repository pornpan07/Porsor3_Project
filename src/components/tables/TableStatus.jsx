// StatusLegend.jsx
// แสดง legend สีสถานะโต๊ะ

const LEGEND_ITEMS = [
  { color: "#86efac", label: "โต๊ะว่าง" },
  { color: "#fbbf24", label: "รอสั่ง" },
  { color: "#f87171", label: "มีลูกค้าใช้งาน" },
];

export function StatusLegend() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontFamily: "'Sarabun', sans-serif",
        fontSize: "0.9rem",
        color: "#374151",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontWeight: "600", color: "#6b7280" }}>สถานะ</span>
      {LEGEND_ITEMS.map(({ color, label }) => (
        <div
          key={label}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: color,
              display: "inline-block",
              flexShrink: 0,
              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            }}
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}