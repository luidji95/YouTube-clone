const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Претражите" className="search-input" />
        <span className="keyboard-icon">⌨</span>
        <button className="search-button">🔍</button>
        <button className="mic-button">🎤</button>
      </div>
    </header>
  );
};

export default Header;
