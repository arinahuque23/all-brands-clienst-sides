import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const FormTwoClients = () => {
  const brandNames = ["Nike", "Adidas", "Gucci", "Zara", "H&M", "Levi's"];
  const typeNames = ["Perfume", "Clouth", "Shoe", "Former Ware","Pant", "Bags"];

  const handleBrandClientProducts = (event) => {
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

    const newProduct = {
      name,
      brandName,
      type,
      price,
      short_descript,
      rating,
      photo,
    };

    console.log(newProduct);

    //send to server

    fetch("http://localhost:4000/addProducts20", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-amber-300 text-center">
          Add Your Products
        </h2>
        <form onSubmit={handleBrandClientProducts}>
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
                  required
                  className="input input-bordered w-full"
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  {brandNames.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Type</span>
              </label>
              <label className="input-group">
                <select
                  name="type"
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
            <div className="form-control md-w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
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
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Products"
            className="btn btn-block bg-amber-200"
          />
        </form>
      </div>
    </div>
  );
};

export default FormTwoClients;
