import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import NavbarMain from "../components/main_navbar/NavbarMain";
import "../styles/css/styles.css";


const Main = () => {
  return (
    <div>
      <header>
        <NavbarMain />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
