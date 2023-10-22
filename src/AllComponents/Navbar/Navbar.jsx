import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ProvidersPrivates/AuthProvider";




const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
  



    return (
        <div className=" ">
             <div 
              className="navbar bg-base-100  shadow-md">
                <div className="navbar-start "  >
                    <img  src="https://i.ibb.co/G7H9c8t/2.jpg" className="w-[100px] h-[78px]" alt="" />
                </div>

                {/*for navlinks */}

                <div className="navbar-center hidden lg:flex  ">
                 <ul className="menu menu-horizontal px-1 gap-8">
                         <li>
                                <NavLink
                                to="/"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold bg-gray-300 " : "bg-gray-300"
                                     }
                                    >  Home</NavLink>
                            
                        </li>

                        <li>
                                <NavLink
                                to="/addproducts "
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold " : " bg-gray-300"
                                     }  > 
                                       Add Products  </NavLink>
                            
                        </li>

                        <li>
                                <NavLink
                                to="/mycart"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active  font-semibold  " : "bg-gray-300"
                                     }
                                    >  My Carts</NavLink>
                            
                        </li>
                    
                           


                                  <li>
                                    {
                                        user ? <button onClick={handleSignOut} className="bg-blue-600 text-white">Log Out</button>
                                        :
                                        <NavLink to="/login"
                                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active font- font-semibold " :
                                         "bg-gray-300" }>Log In 
                                         </NavLink>
                                    }

                                   
                                 </li>
                            </ul>
                            </div>

                                    

                        {/* for button/signin sections*/ }
                        <div className="navbar-end pr-[100px]">
                         { user &&<div className="pr-4">
                                        <h3 className="text-blue-500 text-xl">  {user?.displayName} </h3>
                                    </div> }
                               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        
                        {
                            user && <div className="w-10 rounded-full mr-2">
                            <img src={user.photoURL} className="avatar"/>
                               </div>
                        }
                        
                       </label>
                      
             </div>
        </div>
        </div>
    );
};

export default Navbar;