import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import VideoList from "./components/VideoList";
import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import "./App.css";

function App() {
  const [category, setCategory] = useState("New");

  return (
    <BrowserRouter>
      <Header />
      <NavBar setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<VideoList category={category} />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
