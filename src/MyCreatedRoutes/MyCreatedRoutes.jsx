import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../AllPages/HomePage/Home"
import ErrorPage from "../AllPages/ErrorPage/ErrorPage";
import FormTwoClients from "../AllPages/FormForBrands/FormTwoClients/FormTwoClients";
import MyCart from "../AllPages/MyCart/MyCart";
import LoginP from "../AllPages/LoginPage/LoginP";
import RegisterPage from "../AllPages/RegisterPage/RegisterPage";
import FormOneServer from "../AllPages/FormForBrands/FormsOneServer/FormOneServer";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement :<ErrorPage></ErrorPage>,
      children : [
        {
            path: "/",
            element : <Home></Home>,
            
        },
        {
            path: "/adsbrand",
            element : <FormOneServer></FormOneServer>
        },
        {
            path:"/addproducts",
            element: <FormTwoClients></FormTwoClients>
        },
        {
            path: "/mycart",
            element: <MyCart></MyCart>
        },
        {
            path: "/login",
            element: <LoginP></LoginP>
        },
        {
            path: "/register",
            element: <RegisterPage></RegisterPage>
        }
      ]
    },
  ]);

  export default router ;