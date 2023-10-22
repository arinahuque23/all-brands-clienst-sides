import Banner from "../../AllComponents/Banner";
import BrandsBody from "../../AllComponents/BrandsBody";
import Footer from "../../AllComponents/Footer";
import TeamMember from "../../AllComponents/TeamMember/TeamMember";
import TeastiMonial from "../../AllComponents/TestiMonial/TeastiMonial";


const Home = () => {
    return (
        <div>
            <Banner>            
            </Banner>
            <BrandsBody></BrandsBody>
            <TeamMember></TeamMember>
         <TeastiMonial></TeastiMonial>
        <Footer></Footer>   
        </div>
    );
};

export default Home;