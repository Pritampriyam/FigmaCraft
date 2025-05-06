export const ThirdPane = ({ isOpen, onClose }) => {
  return (
    <div className={`pane ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="close-btn">
        ×
      </button>
      <h2>Third Pane</h2>
      <p>This is the third pane content.</p>
    </div>
  );
};
