/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../src/ProvidersPrivates/AuthProvider";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


import Swal from "sweetalert2";
import app from "../../FireBase/Firebase.config";


const RegisterPage = () => {
    const [user , setUser]= useState(null);
    //googlelog
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider ();
    const { createUser,updatedProfile } = useContext(AuthContext);

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser (loggedInUser)
         })
        .catch(error =>{
             console.error(error); 
        })
    }


    
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,password);
        
        if(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)){
            
            //create userrr
            createUser(email, password)
            .then(result =>{
                console.log(result.user)
                updatedProfile()
                .then()
                .catch()
            })
    
            .catch(error =>{
                console.log(error)
            })
        }
        else{
            Swal("Error","Your Password Must Be 6 character or longer and have atleast a upercase and a spacial character","error")
        }


    }

    return (
        <div>
            <div>
            <div>
                <h2 className="text-3xl  text-center mt-4 text-blue-500 "> Please Register ! </h2>
            </div>
            {/*form start */ }

        <div className="hero min-h-[400px]  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
                 {/*---form--*/}
                  <form onSubmit={handleRegister} className="card-body h-[420px] w-[400px] pl-4">
             <div className="form-control">
                    <label className="label">
                 <span className="label-text">Your Name</span>
                 </label>
                 <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                 <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                 <label className="label">
                     <span className="label-text">Password</span>
                 </label>
                 <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                 <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                 </div>
                 <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                        </form>
                        {/**for google button */}
                        <div className="">
                            <p className="text-xl ml-[125px] font-thin  pt-2 ">Or Signup Using  </ p>

                             <button onClick={handleGoogleSignIn} className="btn ml-[141px] mt-2">google </button>
                             <div className="my-2 p-2  pl-[60px]">
                             <p className="pb-8">Already  Have An Account ? <Link className="text-blue-500 underline" to="/login"> Login</Link> </p>
                            </div>
                        </div> 
                       
                
                 </div>
                </div>
                </div>
                
                
        </div>
            
        </div>
    );
};

export default RegisterPage;