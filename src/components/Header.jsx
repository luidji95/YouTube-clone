import { useState } from "react";

const Header = ({ setCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setCategory(searchTerm); // Prosleđujemo pretragu
      setSearchTerm(""); // Resetujemo input
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
    </header>
  );
};

export default Header;
