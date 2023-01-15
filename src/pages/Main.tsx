import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar_main from "../components/main_navbar/Navbar_main";
import "../styles/css/styles.css";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <header>
        <Navbar_main />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
