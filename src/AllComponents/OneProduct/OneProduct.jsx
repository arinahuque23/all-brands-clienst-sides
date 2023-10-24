/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AiTwotoneEdit } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const OneProduct = ({ prod }) => {
  const { _id, name, brandName, type, price, rating, photo } = prod;

  return (
    <div className="mt-5">
      {/* <div
        className="card  bg-base-100 shadow-xl"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <figure>
          <img
            className="h-[150px] md:h-[280px] w-full"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg md:text-2xl font-medium md:font-semibold">
            {" "}
            {name}
            <div className="badge badge-secondary ml-1">Brand: {brandName}</div>
          </h2>
          <p>Category: {type}</p>
          <p>Price: ${price}</p>
          <p className="flex items-center">
            <span>
              <Rating
                style={{ maxWidth: 100 }}
                readOnly
                halfFillMode="svg"
                value={rating < 4.5 ? Math.floor(rating) : rating}
              />
            </span>
            <span className="text-xl ml-2">{rating}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/updateProduct/${_id}`}>
              <div
                className="badge badge-outline text-black bg-blue-500 h-7 border-none rounded-md w-16"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Edit!"
              >
                <MdModeEdit />
              </div>
            </Link>
            <Tooltip id="my-tooltip" />
            <Link to={`/productDetails/${_id}`}>
              <div
                className="badge badge-outline text-black bg-amber-500 h-7 border-none rounded-md w-16"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="View Details!"
              >
                <FaEye />
              </div>
            </Link>
          </div>
        </div>
      </div> */}
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
