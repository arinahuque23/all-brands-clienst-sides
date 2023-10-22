import swal from "sweetalert";

const FromOneServer = () => {
    
  const handleserverBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const ads_img_0 = form.ads_img_0.value;
    const ads_img_1 = form.ads_img_1.value;
    const ads_img_2 = form.ads_img_2.value;

    form.reset();

    const brands = {
      name,
      photoURL,
      ads_img_0,
      ads_img_1,
      ads_img_2
    };
    console.log(brands);
    fetch(
      "http://localhost:4000/adsBrands",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brands),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("brands Added!", "Your brands has been added.", "success");
        }
       
      });
  };

  return (
    <div>
      <div className="w-1/2 mx-auto h-auto my-10 bg-[#F4F3F0] p-16">
        <form onSubmit={handleserverBrand}>
          <div className="text-center">
            <p className="text-5xl font-normal text-[#374151]">Add New Brand</p>
            <p className="my-3">
              Iconic car brands offer a blend of innovation, quality, and
              luxury, creating a diverse automotive landscape.
            </p>
          </div>

          <input
            type="text"
            className="w-full my-2 p-1 rounded-md"
            name="name"
            placeholder="Enter Brands name"
            id=""
          />
          <input
            type="text"
            name="photoURL"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL"
            id=""
          />
          <input
            type="text"
            name="ads_img_0"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL 0"
            id=""
          />
          <input
            type="text"
            name="ads_img_1"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL 1"
            id=""
          />
          <input
            type="text"
            name="ads_img_2"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL 2"
            id=""
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Add Brand"
            className="text-lg btn p-1 my-2 text-black w-full font-normal text-center rounded-md bg-[#D2B48C]"
          />
        </form>
      </div>
    </div>
  );
};

export default FromOneServer;