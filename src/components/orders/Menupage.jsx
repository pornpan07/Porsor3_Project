import MenuCard from "./MenuCard";

const MENU_ITEMS = [
  { id: 1, name: "เล้งแซ่บ",    price: 89, img: null },
  { id: 2, name: "ก๋วยจั๊บญวน", price: 60, img: null },
  { id: 3, name: "ข้าวสวย",    price: 15, img: null },
  { id: 4, name: "ไข่เจียว",   price: 35, img: null },
  { id: 5, name: "เป๊ปซี่",    price: 25, img: null },
];

export default function MenuPage({ onAddToOrder }) {
  return (
    <div style={s.wrapper}>
      <h1 style={s.title}>Menu</h1>
      <div style={s.grid}>
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={onAddToOrder} />
        ))}
      </div>
    </div>
  );
}

const s = {
  wrapper: { padding: "28px 24px" },
  title: { fontSize: "26px", fontWeight: "800", color: "#2d6a52", marginBottom: "20px", letterSpacing: "0.5px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
    gap: "16px",
  },
};