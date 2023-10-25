
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
//   const [cartData, setCartData] = useAtom(cartDataAtom);

  // destructure product
  const { name, photo, brandName, type, price, short_descript, rating } =
    product;

  // functionality
  const addToCart = () => {
      fetch('http://localhost:4000/addtoCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Thanks!',
                        text: 'Added Product Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay!'
                    });
                }
            });
  };

  // hooks
  useEffect(() => {
    fetch("http://localhost:4000/addProducts20")
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
        const currentProduct = data.find((e) => e._id == id);
        setProduct(currentProduct);

      });
  }, []);

  return (
    <div >
      <h2 className="text-3xl text-red-400 text-center  font-serif mt-8">Add Your Favorites Items </h2>
    <div className="flex justify-center items-center mt-8">
      
      
      <div className="hero glass border border-black m-15 mt-6 ml-16 mr-16 mb-5 rounded">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{short_descript}</p>
            <p>{brandName}</p>
            <p>{type}</p>
            <p>{price}$</p>
            <p> Rating : {rating}</p>
            <button className="btn btn-primary" onClick={ addToCart}>
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsPage;
