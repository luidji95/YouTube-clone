import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoList from "./components/VideoList";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<VideoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
