/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCartStore = ({ product ,cartData, setCartData }) => {
  const { _id, name, photo, brandName, type, price, rating } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/addtoCart/${_id}`, {
            method : 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Products has been deleted.", "success");
            }
            const remaining = cartData.filter (cat => cat._id !==_id);
            setCartData(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-pink-200  card-side  h-[280px]  border w-[550px]  shadow-xl">
        <div className="flex">
          <div className="card-body flex">
            <h2 className="card-title">Product Name : {name}</h2>
            <p>Brand : {brandName}</p>
            <p>{price}$</p>
            <p>Type : {type}</p>
            <p>Ratings: {rating}</p>
            <div className="ml-[200px] pl-2 ">
              <button className="btn  hover:bg-red-200">Buy</button>
            </div>
          </div>

          <div className="justify-end items-end ml-10 m-2 mt-4">
            <div className="avatar ">
              <div className="w-24 rounded-full">
                <img src={photo} />
              </div>
              <div className="ml-4 p-4 ">
                <button onClick={() => handleDelete(_id)}>
                  <AiFillCloseCircle></AiFillCloseCircle>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartStore;
