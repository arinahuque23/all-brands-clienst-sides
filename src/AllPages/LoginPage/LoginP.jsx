import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../ProvidersPrivates/AuthProvider";


const LoginP = () => {

    const {signIn} = useContext( AuthContext );

    const location = useLocation();
    const navigate = useNavigate();
    console.log('location page',location);


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

       signIn(email,password)
       .then(result =>{
        console.log(result.user);
            //navigates
            navigate(location?.state? location.state:'/');

       })
       .catch(error =>{
        console.error(error);
       })
        

    }

    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center "> Please Login ! </h2>
            </div>
            {/*form start */ }

        <div className="hero min-h-[500px]  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
                 {/*---form--*/}
                  <form onSubmit={handleLogin} className="card-body w-[400px] pl-4">
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
                    <button className="btn btn-primary">Login</button>
                    </div>
                        </form>
                        <div className="my-2 p-2  pl-[60px]">
                    <p className="pb-2">Do Not Have An Account ? <Link className="text-blue-500 underline" to="/register">Register</Link> </p>
                </div>
                 </div>
                </div>
                </div>
                
                
        </div>
    );
};

export default LoginP;