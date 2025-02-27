import NavBar from "./NavBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
