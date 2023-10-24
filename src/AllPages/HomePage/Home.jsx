import { useLoaderData } from "react-router-dom";
import Banner from "../../AllComponents/Banner";
import BrandsBody from "../../AllComponents/BrandsBody";
import TeamMember from "../../AllComponents/TeamMember/TeamMember";
import TeastiMonial from "../../AllComponents/TestiMonial/TeastiMonial";


const Home = () => {
    const sixBrands= useLoaderData()
    return (
        <div>
            <Banner>            
            </Banner>

            <div className="text-3xl text-red-300 hover:text-purple-400 font-serif items-center text-center m-6 md:text-center ">
            <h2>Explore Our Brands </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center " >
                {
                    sixBrands.map(brands=>  <BrandsBody key={brands._id} brands={brands
                    } 
                     ></BrandsBody>) 
                }
            </div>
           <TeamMember ></TeamMember>
           <TeastiMonial></TeastiMonial>
        </div>
    );
};

export default Home;