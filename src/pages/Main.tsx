
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import "../styles/css/styles.css";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <header>

      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
