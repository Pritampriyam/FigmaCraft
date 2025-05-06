export const Header = ({ onTogglePane }) => {
  return (
    <header className="header">
      <h1>My App</h1>
      <button onClick={onTogglePane} className="toggle-btn">
        Toggle Third Pane
      </button>
    </header>
  );
};
