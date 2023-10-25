import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../AllPages/HomePage/Home"
import ErrorPage from "../AllPages/ErrorPage/ErrorPage";
import FormTwoClients from "../AllPages/FormForBrands/FormTwoClients/FormTwoClients";
import MyCart from "../AllPages/MyCart/MyCart";
import LoginP from "../AllPages/LoginPage/LoginP";
import RegisterPage from "../AllPages/RegisterPage/RegisterPage";
import FormOneServer from "../AllPages/FormForBrands/FormsOneServer/FormOneServer";
import Advertisements from "../AllPages/Advertisements/Advertisements";
import PrivatesRoute from "./PrivatesRoute";
import Profile from "../AllPages/Profile/Profile";
import Edit from "../AllPages/EditBrands/Edit";
import DetailsPage from "../AllPages/DetailsPage/DetailsPage";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement :<ErrorPage></ErrorPage>,
      children : [
        {
            path: "/",
            element : <Home></Home>,
            loader : ()=> fetch('https://all-brands-server-side-nzbg6s2fy-arina-huque-rafas-projects.vercel.app/adsBrands')
            
        },
        {
          path : "/profile",
          element: <Profile></Profile>
        }
        ,
        {
          path :"/viewdetails/:id",
          element : <DetailsPage></DetailsPage>
        },
        
        {
            path: "/adsbrand",
            element : <FormOneServer></FormOneServer>
        },
        {
            path: "/adsSection/:id",
            element: <PrivatesRoute> <Advertisements></Advertisements></PrivatesRoute>,
            loader: ({ params }) =>fetch( `https://all-brands-server-side-nzbg6s2fy-arina-huque-rafas-projects.vercel.app/adsBrands/${params.id}` ),
          },
        ///adsSection/:id
        {
            path:"/addproducts",
            element:<PrivatesRoute><FormTwoClients></FormTwoClients></PrivatesRoute>
        },
        {
            path: "/addtoCart",
            element:<PrivatesRoute> <MyCart></MyCart></PrivatesRoute>,
            loader : ()=> fetch('https://all-brands-server-side-nzbg6s2fy-arina-huque-rafas-projects.vercel.app/addtoCart')
        },
        {
          path : "/edit/:id",
          element: <Edit></Edit>,
          loader : ({params}) => fetch(`https://all-brands-server-side-nzbg6s2fy-arina-huque-rafas-projects.vercel.app/addProducts20/${params.id}`)
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