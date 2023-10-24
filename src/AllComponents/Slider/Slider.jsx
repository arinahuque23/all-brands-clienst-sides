import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLoaderData } from 'react-router-dom';


const Slider = () => {

      const adsCarrosel = useLoaderData();
     

    return (
        <div className='text-center w-full h-[200px]' >
            <Carousel  autoPlay={true} interval={900} showThumbs={false} infiniteLoop={true} width="100%">
                <div >
                    <img  src={adsCarrosel.ads_img_0} />

                </div>
                <div>
                    <img src={adsCarrosel.ads_img_1}/>
                </div>
                <div>
                    <img src={adsCarrosel.ads_img_2} />
                </div>
               
            </Carousel>
        </div>
    );
};

export default Slider;