// TableSelection.jsx
// หน้าหลักเลือกโต๊ะ — รวม TableGrid, StatusLegend, TakeAwayButton

import { useState } from "react";
import { TableGrid } from "../components/tables/TableGrid";
import { TableStatus } from "../components/tables/TableStatus";
import { TakeAwayButton } from "../components/tables/TakeAwayButton";

// ข้อมูลโต๊ะเริ่มต้น — ปรับได้ตามจริง
const INITIAL_TABLES = [
  { id: 1, number: 1, status: "available" },
  { id: 2, number: 2, status: "available" },
  { id: 3, number: 3, status: "available" },
  { id: 4, number: 4, status: "pending" },
  { id: 5, number: 5, status: "available" },
  { id: 6, number: 6, status: "available" },
  { id: 7, number: 7, status: "available" },
  { id: 8, number: 8, status: "available" },
  { id: 9, number: 9, status: "available" },
  { id: 10, number: 10, status: "occupied" },
];

export default function TableSelection() {
  const [tables] = useState(INITIAL_TABLES);
  const [selected, setSelected] = useState(null);

  function handleTableSelect({ tableNumber, status }) {
    if (status === "occupied") return;
    setSelected({ type: "table", tableNumber });
    // TODO: navigate to order page
    alert(`เลือกโต๊ะ ${tableNumber} แล้ว`);
  }

  function handleTakeAway() {
    setSelected({ type: "takeaway" });
    // TODO: navigate to takeaway order page
    alert("เลือก Take Away แล้ว");
  }

  return (
    <>
      {/* Google Font — Sarabun สำหรับภาษาไทย */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f0fdf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "'Sarabun', sans-serif",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            border: "2px solid #93c5fd",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: "860px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Header */}
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "16px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Tables
            </h1>
          </div>

          {/* Table Grid */}
          <TableGrid tables={tables} onSelect={handleTableSelect} />

          {/* Footer: Legend + Take Away */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "8px",
            }}
          >
            <StatusLegend />
            <TakeAwayButton onClick={handleTakeAway} />
          </div>
        </div>
      </div>
    </>
  );
}