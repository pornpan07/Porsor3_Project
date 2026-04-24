import { useState } from "react";
import logo from "../assets/logo.png";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={styles.wrapper}>
      {/* Background texture */}
      <div style={styles.bgPattern} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img
            src={logo}
            alt="PORSOR3 Logo"
            style={styles.logoImg}
          />
        </div>



        {/* Title */}
        <h1 style={styles.title}>PORSOR3</h1>

        <div style={styles.divider} />

        {/* Form */}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>👤</span>
            <input
              type="text"
              placeholder="Admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocused("user")}
              onBlur={() => setFocused(null)}
              style={{
                ...styles.input,
                ...(focused === "user" ? styles.inputFocused : {}),
              }}
            />
          </div>

          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused("pass")}
              onBlur={() => setFocused(null)}
              style={{
                ...styles.input,
                ...(focused === "pass" ? styles.inputFocused : {}),
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(loading ? styles.buttonLoading : {}),
            }}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.spinner}>⟳</span>
            ) : (
              "LOGIN"
            )}
          </button>
        </form>

        <p style={styles.footer}>© 2026 PORSOR3 · มหาวิทยาลัยนเรศวร</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f0e8",
    fontFamily: "'Sarabun', 'Noto Sans Thai', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  bgPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(26,58,46,0.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(26,58,46,0.06) 0%, transparent 50%)`,
    pointerEvents: "none",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "48px 44px 36px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 40px rgba(26,58,46,0.12), 0 2px 8px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  logoContainer: {
    marginBottom: "12px",
  },
  logoImg: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
  subtitle: {
    fontSize: "14px",
    color: "#1a3a2e",
    fontWeight: "600",
    margin: "4px 0 0",
    letterSpacing: "0.5px",
  },
  subtitleSmall: {
    fontSize: "11px",
    color: "#5a7a6e",
    margin: "2px 0 0",
    letterSpacing: "0.3px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: "4px",
    margin: "16px 0 0",
    fontFamily: "'Montserrat', 'Kanit', sans-serif",
  },
  divider: {
    width: "60px",
    height: "3px",
    background: "linear-gradient(90deg, #2d6a52, #4a9e7e)",
    borderRadius: "2px",
    margin: "14px 0 28px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    fontSize: "15px",
    zIndex: 1,
    opacity: 0.5,
  },
  input: {
    width: "100%",
    padding: "14px 16px 14px 42px",
    borderRadius: "10px",
    border: "1.5px solid #d8e8e0",
    fontSize: "15px",
    color: "#1a1a1a",
    background: "#f9fdfb",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputFocused: {
    borderColor: "#2d6a52",
    boxShadow: "0 0 0 3px rgba(45,106,82,0.12)",
    background: "#fff",
  },
  button: {
    marginTop: "6px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #2d6a52 0%, #1a3a2e 100%)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "3px",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.1s",
    fontFamily: "'Montserrat', sans-serif",
  },
  buttonLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
  spinner: {
    display: "inline-block",
    animation: "spin 1s linear infinite",
    fontSize: "18px",
  },
  footer: {
    marginTop: "24px",
    fontSize: "11px",
    color: "#aaa",
    letterSpacing: "0.3px",
  },
};
