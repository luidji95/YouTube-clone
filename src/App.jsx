import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoList from "./components/VideoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VideoList></VideoList>
    </>
  );
}

export default App;
