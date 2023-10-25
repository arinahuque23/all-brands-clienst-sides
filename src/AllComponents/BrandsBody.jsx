/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const BrandsBody = ({ brands }) => {

    const Navigate = useNavigate()
    

  const { _id, name, photoURL } = brands;

  const handleAdsBrand = ()=>{
    Navigate ('/adsSection')
  }

  return (
    <div>
      
      <Link to={`/adsSection/${_id}`}>
    <div
      onClick={handleAdsBrand}
      className="max-w-6xl mx-auto  ">
        <h2></h2>
      <div className="card h-[350px] border p-4 gap-3 m-10 shadow-xl hover:bg-purple-400   hover:text-white">
        <figure>
          <img src={photoURL} className="h-[210px] w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">{name}</h2>
        </div>
      </div>
    </div>
  </Link>
    </div>
  
  );
};

export default BrandsBody;
