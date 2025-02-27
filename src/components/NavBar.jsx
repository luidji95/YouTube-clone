const categories = [
  { name: "Home", icon: "home" },
  { name: "Trending", icon: "whatshot" },
  { name: "Coding", icon: "code" },
  { name: "JavaScript", icon: "integration_instructions" },
  "divider",
  { name: "Music", icon: "music_note" },
  { name: "ReactJS", icon: "integration_instructions" },
  { name: "Education", icon: "school" },
  { name: "Podcast", icon: "podcasts" },
  "divider",
  { name: "Movie", icon: "movie" },
  { name: "Gaming", icon: "sports_esports" },
  { name: "Live", icon: "live_tv" },
  { name: "Sport", icon: "sports_soccer" },
];

const NavBar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <ul>
        {categories.map((item, index) =>
          item === "divider" ? (
            <hr key={index} className="navbar-divider" />
          ) : (
            <li key={item.name} onClick={() => setCategory(item.name)}>
              <span className="material-icons">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
