import OrderItem from "./OrderItem";

export default function OrderPanel({ tableId = "Table1", items, onUpdateQty, onRemove, onConfirm }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <aside style={s.panel}>
      <h2 style={s.title}>
        Order <span style={s.tableTag}>#{tableId}</span>
      </h2>

      <div style={s.list}>
        {items.length === 0 ? (
          <p style={s.empty}>ยังไม่มีรายการ</p>
        ) : (
          items.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              onUpdateQty={onUpdateQty}
              onRemove={onRemove}
            />
          ))
        )}
      </div>

      <div style={s.footer}>
        <div style={s.totalRow}>
          <span style={s.totalLabel}>รวมทั้งหมด:</span>
          <span style={s.totalAmount}>{total} บาท</span>
        </div>
        <button style={s.confirmBtn} onClick={onConfirm} disabled={items.length === 0}>
          ยืนยันออเดอร์
        </button>
      </div>
    </aside>
  );
}

const s = {
  panel: {
    width: "240px",
    flexShrink: 0,
    background: "#fff",
    boxShadow: "-2px 0 12px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px 16px",
    overflowY: "auto",
  },
  title: { fontSize: "17px", fontWeight: "800", color: "#1a1a1a", margin: "0 0 16px", display: "flex", alignItems: "center", gap: "6px" },
  tableTag: { fontSize: "14px", color: "#6b7280", fontWeight: "600" },
  list: { flex: 1, display: "flex", flexDirection: "column", gap: "14px" },
  empty: { fontSize: "13px", color: "#9ca3af", textAlign: "center", paddingTop: "20px" },
  footer: { marginTop: "16px", paddingTop: "12px", borderTop: "1.5px solid #f0f0f0" },
  totalRow: { display: "flex", justifyContent: "space-between", marginBottom: "12px" },
  totalLabel: { fontSize: "13px", color: "#6b7280" },
  totalAmount: { fontSize: "15px", fontWeight: "800", color: "#1a1a1a" },
  confirmBtn: {
    width: "100%", padding: "12px", borderRadius: "10px", border: "none",
    background: "linear-gradient(135deg, #2d6a52, #1a3a2e)",
    color: "#fff", fontSize: "14px", fontWeight: "700",
    cursor: "pointer", opacity: 1, transition: "opacity 0.15s",
  },
};