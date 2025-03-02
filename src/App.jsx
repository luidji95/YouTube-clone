import { useState } from "react";
import NavBar from "./components/NavBar";
import VideoList from "./components/VideoList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [category, setCategory] = useState("New");

  return (
    <div>
      <Header />
      <NavBar setCategory={setCategory} />
      <VideoList category={category} />
    </div>
  );
}

export default App;
