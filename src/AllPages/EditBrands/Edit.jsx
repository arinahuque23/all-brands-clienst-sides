/* eslint-disable no-undef */
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const brandNames = ["Nike", "Adidas", "Gucci", "Zara", "H&M", "Levi's"];
  const typeNames = ["Perfure", "Clouth", "Shoe", "Former Ware"];

  const prod = useLoaderData();
  const {_id, name, brandName,short_descript, type, price, rating, photo } = prod;

  const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const short_descript = form.short_descript.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    form.reset();

    const updateProduct = {
      name,
      brandName,
      type,
      price,
      short_descript,
      rating,
      photo,
    };

    console.log(updateProduct);

    //send to server

    fetch(`http://localhost:4000/addProducts20/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated ! Thanks !",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Product</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-amber-300 text-center">
          Update Your Products
        </h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl">Products Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Brand Name</span>
              </label>
              <label className="input-group">
                <select
                  name="brandName"
                  defaultValue={brandName}
                  required
                  className="input input-bordered w-full"
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  {brandNames.map((brand, index) => (
                    <option key={index} defaultValue={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Type</span>
              </label>
              <label className="input-group">
                <select
                  name="type"
                  defaultValue={type}
                  required
                  className="input input-bordered w-full"
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  {typeNames.map((type, index) => (
                    <option key={index} defaultValue={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="short_descript"
                  defaultValue={short_descript}
                  placeholder="short description"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  required
                  className="input input-bordered w-full"
                  step="0.5"
                  min="1"
                  max="5"
                />
              </label>
            </div>
          </div>
          {/* form Photo URL row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Products"
            className="btn btn-block bg-amber-200"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
