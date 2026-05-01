import { Outlet } from "react-router-dom";
import InitialNav from "../Components/InitialNav";
import Footer from "../Components/Footer";


const InitialHome = () => {
  return (
    <div className="site-root">
      <InitialNav />
      <Outlet />


      <Footer />
    </div>
  );
};

export default InitialHome;