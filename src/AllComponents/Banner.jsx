import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

  <div className="hero h-[600px] bg-base-200  mb-4 mt-2 bg-[url('https://i.ibb.co/Q96Zm8F/Clothing-Rack-Boutique-Fashion-Banner-Landscape.jpg')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src=""/>
                    <div>
                        <h1 className="text-5xl font-bold text-[#EB455F] mb-2">FEEL PRETTY FEEL CLASSY  </h1> 
                        <p className="py-2 text-xl text-white">Buy Your Fashion From Us </p>
                        <p className='text-xl text-white py-3'> We Provide You The Best You Deserve</p>
                        <Link to="/" className="btn bg-[#EB455F] text-white border-none">Get Started </Link> 
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default Banner;