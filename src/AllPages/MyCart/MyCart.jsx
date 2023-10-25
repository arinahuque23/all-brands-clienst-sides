/* eslint-disable no-unused-vars */
import {  useState } from "react";
import MyCartStore from "./MyCartStore";
import { useLoaderData } from "react-router-dom";
import { BiHappyHeartEyes } from "react-icons/bi";

const MyCart = () => {
    const carts = useLoaderData()
    const [cartData, setCartData] = useState(carts);
    console.log(cartData);
  
    //   const [cartData, setCartData] = useAtom(cartDataAtom);
    
    const [noFound , setNoFound] = useState([]);
    

  return (
    <div>
       <div className="flex m-5 justify-center">
       <h2 className=" text-4xl flex  font-serif mt-4 underline text-red-400">Buy Your Fashion </h2>
       <h2 className="mt-6 ml-4 p-2  "> <BiHappyHeartEyes></BiHappyHeartEyes></h2>
       </div>
    <div className ="gap-5 mt-10 mb-3 ml-[20vh] mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center">
        {
            cartData.map(product => <MyCartStore 
            
                 key={product.id} 
                 product={product} 
                 cartData={cartData}
                 setCartData={setCartData}
                 
                 >
                 </MyCartStore>)
        }
    </div>
    </div>
    
  );
};

export default MyCart;
