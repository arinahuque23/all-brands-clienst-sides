/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../src/ProvidersPrivates/AuthProvider";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import app from "../../FireBase/Firebase.config";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const [user, setUser] = useState(null);
    const [passwordError, setPasswordError] = useState(null); // Added state for password error message

    // Google login
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const { createUser, updatedProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    updatedProfile()
                        .then()
                        .catch()
                        navigate(form,{replace: true})
                })
                .catch(error => {
                    console.log(error);
                    toast.error('Error');
                });
        } else {
            setPasswordError("Password must contain at least one uppercase letter, one special character, and be at least 6 characters long");
        }
    }

    return (
        <div>
            <div>
                <div>
                    <h2 className="text-3xl  text-center mt-4 text-blue-500">Please Register!</h2>
                </div>

                <div className="hero min-h-[400px]  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
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
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    {passwordError && <p className="text-red-500">{passwordError}</p>} {/* Display error message */}
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <div>
                                <p className="text-xl ml-[125px] font-thin  pt-2">Or Signup Using</p>
                                <button onClick={handleGoogleSignIn} className="btn ml-[141px] mt-2">Google</button>
                                <div className="my-2 p-2 pl-[60px]">
                                    <p className="pb-8">Already Have An Account? <Link className="text-blue-500 underline" to="/login">Login</Link></p>
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
