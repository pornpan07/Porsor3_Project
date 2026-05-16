// TableGrid.jsx
// แสดง grid โต๊ะทั้งหมด รับ tables array และ onSelect callback

import { TableCard } from "./TableCard";

export function TableGrid({ tables, onSelect }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: "14px",
        width: "100%",
      }}
    >
      {tables.map((table) => (
        <TableCard
          key={table.id}
          tableNumber={table.number}
          status={table.status}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}