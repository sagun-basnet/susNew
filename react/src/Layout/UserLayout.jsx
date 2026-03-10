import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import Navbar from "../components/Navbar";

const UserLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
export default UserLayout