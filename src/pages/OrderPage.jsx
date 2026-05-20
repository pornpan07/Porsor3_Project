import { useState } from "react";
import MenuPage from "../components/orders/Menupage.jsx";
import OrderPanel from "../components/orders/OrderPanel.jsx";

const INITIAL_ORDERS = [
  { id: 1, name: "เส้งแซ่บ",    price: 89, note: "S, เผ็ดน้อย, ต้มยำน้ำข้น", qty: 1 },
  { id: 2, name: "ก๋วยจับญวน", price: 60, note: "น้ำซุปเส้งแซ่บ",            qty: 1 },
];

export default function OrderPage() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  const handleAddToOrder = (item) => {
    setOrders((prev) => {
      const exists = prev.find((o) => o.id === item.id);
      if (exists) return prev.map((o) => o.id === item.id ? { ...o, qty: o.qty + 1 } : o);
      return [...prev, { ...item, note: "", qty: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setOrders((prev) =>
      prev.map((o) => o.id === id ? { ...o, qty: Math.max(1, o.qty + delta) } : o)
    );
  };

  const handleRemove = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const handleConfirm = () => {
    alert("ยืนยันออเดอร์เรียบร้อย!");
    setOrders([]);
  };

  return (
    <div style={s.root}>
      <main style={s.main}>
        <MenuPage onAddToOrder={handleAddToOrder} />
      </main>

      <OrderPanel
        tableId="Table1"
        items={orders}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

const s = {
  root: {
    display: "flex",
    height: "100vh",
    background: "#f0ece4",
    fontFamily: "'Sarabun', 'Noto Sans Thai', sans-serif",
    overflow: "hidden",
  },
  main: { flex: 1, overflowY: "auto" },
};