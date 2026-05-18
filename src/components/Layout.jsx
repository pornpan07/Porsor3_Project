import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        open={open}
        onToggle={() => setOpen(!open)}
        activeNav={activeNav}
        onNavChange={setActiveNav}
      />

      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}