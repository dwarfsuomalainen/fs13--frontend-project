
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import "../styles/css/styles.css";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
