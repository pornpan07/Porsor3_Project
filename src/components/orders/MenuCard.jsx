export default function MenuCard({ item, onAdd }) {
  return (
    <div style={s.card} onClick={() => onAdd(item)}>
      {item.img ? (
        <img src={item.img} alt={item.name} style={s.img} />
      ) : (
        <div style={s.imgPlaceholder}>{item.name}</div>
      )}
      <p style={s.name}>{item.name}</p>
      <p style={s.price}>{item.price} บาท</p>
    </div>
  );
}

const s = {
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    cursor: "pointer",
    transition: "transform 0.15s, box-shadow 0.15s",
    border: "1px solid #f0f0f0",
  },
  img: {
    width: "100%",
    aspectRatio: "4/3",
    objectFit: "cover",
    borderRadius: "10px",
  },
  imgPlaceholder: {
    width: "100%",
    aspectRatio: "4/3",
    background: "linear-gradient(135deg, #e8e0d0, #d4cbbf)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9a9080",
    fontSize: "12px",
  },
  name: { margin: "10px 0 4px", fontSize: "14px", fontWeight: "700", color: "#1a1a1a", textAlign: "center" },
  price: { margin: 0, fontSize: "12px", color: "#6b7280", textAlign: "center" },
};