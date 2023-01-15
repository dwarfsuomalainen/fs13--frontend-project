import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar_main from "../components/main_navbar/NavbarMain";
import "../styles/css/styles.css";


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
