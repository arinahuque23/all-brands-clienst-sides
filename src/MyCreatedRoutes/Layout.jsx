import { Outlet } from "react-router-dom";
import Navbar from "../AllComponents/Navbar/Navbar";
import Footer from "../AllComponents/Footer";




const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;