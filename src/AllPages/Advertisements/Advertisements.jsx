import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import OneProduct from "../../AllComponents/OneProduct/OneProduct";
import NotFound from "../../AllComponents/NotFound/NotFound";
// import Slider from "../../AllComponents/Slider/Slider";

const Advertisements = () => {
  const BrandName = useLoaderData();

  console.log(BrandName);
  const [product20, setProduct20] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/addProducts20")
      .then((res) => res.json())
      .then((data) => {
        setProduct20(data);
      });
  }, []);

  console.log(product20);

  const product20Data = product20.filter((p) => p.brandName === BrandName.name);

  console.log(product20Data);

  return (
    <div>
      <div className="text-center font-serif text-red-400 mt-4 text-3xl mb-7">
      <h1>EXPLORE</h1>
      <p>Explore New place, food, culture around the world and many more</p>
      </div>


<div className="carousel  h-[500px] mt-6 w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={BrandName.ads_img_0} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={BrandName.ads_img_1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={BrandName.ads_img_2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={BrandName.ads_img_4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

      <div className="border-2 border-gray-200 p-2 m-2 rounded-xl">
        <h2 className="text-xl text-red-400 md:text-5xl font-bold text-center my-6 md:my-16">
          Our Featured Products
        </h2>
        <div>
          {product20Data.length > 0 ? (
            <div className="max-w-5xl mx-auto p-2 md:p-0 mb-10 grid justify-center items-center gap-4  grid-cols-1 md:grid-cols-2 ">
              {product20Data.map((prod) => (
                <OneProduct key={prod._id} prod={prod}></OneProduct>
              ))}
            </div>
          ) : (
            <NotFound></NotFound>
          )}
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
