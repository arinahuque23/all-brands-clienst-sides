/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AiTwotoneEdit } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const OneProduct = ({ prod }) => {
  const { _id, name, brandName, type, price, rating, photo } = prod;

  return (
    <div className="mt-5">
      
      <div className="card  glass h-[490px]  mx-5 w-[500px] ">
        <figure>
          <img className="mt-10" src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Products Name : {name}</h2>
          <p>Brand : {brandName} </p>
          <p>Brand :Price: {price} $</p>
          <p className="flex items-center ">Rating : {rating}</p>
          <p>Type : {type} </p>
          <div className="card-actions justify-end">
            <Link to={`/edit/${_id}`}>
              <button className="btn  text-blue-500 ">
                {" "}
                <AiTwotoneEdit></AiTwotoneEdit> Update{" "}
              </button>
            </Link>

            <Link to={`/viewdetails/${_id}`}>
              <button className="btn   text-blue-500">
               
                <BiDetail></BiDetail> Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
