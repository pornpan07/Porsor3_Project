import { IconPlus, IconMinus, IconClose } from "../icons/Icons";

export default function OrderItem({ item, onUpdateQty, onRemove }) {
  return (
    <div style={s.wrapper}>
      <div style={s.header}>
        <span style={s.name}>{item.name}</span>
        <button style={s.removeBtn} onClick={() => onRemove(item.id)}>
          <IconClose />
        </button>
      </div>

      {item.note ? <p style={s.note}>{item.note}</p> : null}

      <div style={s.qtyRow}>
        <button style={s.qtyBtn} onClick={() => onUpdateQty(item.id, -1)}>
          <IconMinus />
        </button>
        <span style={s.qtyNum}>{item.qty}</span>
        <button style={s.qtyBtn} onClick={() => onUpdateQty(item.id, 1)}>
          <IconPlus />
        </button>
        <span style={s.auTag}>au</span>
        <span style={s.total}>{item.price * item.qty} บาท</span>
      </div>
    </div>
  );
}

const s = {
  wrapper: { borderBottom: "1px solid #f0f0f0", paddingBottom: "12px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  name: { fontSize: "14px", fontWeight: "700", color: "#1a1a1a" },
  removeBtn: { background: "none", border: "none", cursor: "pointer", color: "#d1d5db", padding: "2px", display: "flex" },
  note: { margin: "3px 0 6px", fontSize: "11px", color: "#9ca3af" },
  qtyRow: { display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" },
  qtyBtn: {
    width: "22px", height: "22px", borderRadius: "6px",
    border: "1.5px solid #d1d5db", background: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", color: "#374151",
  },
  qtyNum: { fontSize: "13px", fontWeight: "700", color: "#1a1a1a", minWidth: "16px", textAlign: "center" },
  auTag: {
    background: "#ef4444", color: "#fff",
    fontSize: "10px", padding: "1px 5px", borderRadius: "4px", fontWeight: "700",
  },
  total: { fontSize: "13px", fontWeight: "700", color: "#1a1a1a", marginLeft: "auto" },
};