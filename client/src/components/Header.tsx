type Prop = {
  isServerConnect: boolean;
};

const Header = ({ isServerConnect }: Prop) => {
  return (
    <header className="chat-header">
      {/* ── Left: Avatar + Info ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div className="header-avatar" aria-hidden="true">
          AC
        </div>

        <div>
          <h1 className="header-title">
            Chetan's{" "}
            <span style={{ color: "var(--accent)" }}>AI</span>{" "}
            Assistant
          </h1>
          <p className="header-subtitle">
            <i
              className="ri-robot-2-line"
              aria-hidden="true"
              style={{ marginRight: "4px", fontSize: "11px" }}
            />
            Ask me about projects, skills & experience
          </p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        

  
        {isServerConnect && (
          <div
            className="status-badge"
            role="status"
            aria-label="Server connected"
          >
            <span className="status-dot" aria-hidden="true" />
            <span>Online</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
