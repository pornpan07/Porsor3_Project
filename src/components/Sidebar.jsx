import logo from "../assets/logo.png";
import {
  IconDashboard, IconMenu, IconOrders,
  IconTable, IconSettings, IconLogout, IconChevronLeft,
} from "./icons/Icons";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: <IconDashboard /> },
  { key: "menu",      label: "Menu",      icon: <IconMenu /> },
  { key: "orders",    label: "Orders",    icon: <IconOrders /> },
  { key: "table",     label: "Table",     icon: <IconTable /> },
  { key: "settings",  label: "Settings",  icon: <IconSettings /> },
];

export default function Sidebar({ open, onToggle, activeNav, onNavChange }) {
  return (
    <aside style={{ ...s.sidebar, width: open ? "210px" : "58px" }}>
      {/* Top: logo + toggle */}
      <div style={s.top}>
        <div style={s.logoRow}>
          <img src={logo} alt="logo" style={s.logoImg} />
          {open && (
            <div style={s.logoText}>
              <span style={s.logoTitle}>PORSOR3</span>
              <span style={s.logoSub}>เล้งแซ่บ</span>
            </div>
          )}
        </div>
        <button style={s.toggleBtn} onClick={onToggle}>
          <IconChevronLeft open={open} />
        </button>
      </div>

      {/* Nav items */}
      <nav style={s.nav}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            title={!open ? item.label : ""}
            style={{
              ...s.navBtn,
              ...(activeNav === item.key ? s.navActive : {}),
              justifyContent: open ? "flex-start" : "center",
            }}
            onClick={() => onNavChange(item.key)}
          >
            <span style={{ color: activeNav === item.key ? "#1a3a2e" : "#6b7280" }}>
              {item.icon}
            </span>
            {open && (
              <span style={{ ...s.navLabel, color: activeNav === item.key ? "#1a3a2e" : "#374151" }}>
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button
        style={{ ...s.navBtn, ...s.logoutBtn, justifyContent: open ? "flex-start" : "center" }}
        title={!open ? "Logout" : ""}
      >
        <span style={{ color: "#9ca3af" }}><IconLogout /></span>
        {open && <span style={{ ...s.navLabel, color: "#9ca3af" }}>Logout</span>}
      </button>
    </aside>
  );
}

const s = {
  sidebar: {
    background: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 12px rgba(0,0,0,0.06)",
    transition: "width 0.25s ease",
    overflow: "hidden",
    flexShrink: 0,
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 10px 10px",
    borderBottom: "1px solid #f0f0f0",
    gap: "6px",
    minHeight: "62px",
  },
  logoRow: { display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", flex: 1, minWidth: 0 },
  logoImg: { width: "36px", height: "36px", objectFit: "contain", flexShrink: 0 },
  logoText: { display: "flex", flexDirection: "column", overflow: "hidden" },
  logoTitle: { fontSize: "13px", fontWeight: "700", color: "#1a1a1a", whiteSpace: "nowrap", letterSpacing: "1px" },
  logoSub: { fontSize: "9px", color: "#9ca3af", whiteSpace: "nowrap" },
  toggleBtn: {
    background: "#f3f4f6",
    border: "none",
    borderRadius: "8px",
    width: "26px",
    height: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    color: "#6b7280",
  },
  nav: { display: "flex", flexDirection: "column", padding: "10px 6px", gap: "2px", flex: 1 },
  navBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "9px 10px",
    borderRadius: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    width: "100%",
    transition: "background 0.15s",
  },
  navActive: { background: "#f5c800" },
  navLabel: { fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" },
  logoutBtn: { margin: "0 6px 14px", width: "calc(100% - 12px)" },
};