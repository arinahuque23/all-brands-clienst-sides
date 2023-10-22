import {BsInstagram} from 'react-icons/bs'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {FaFacebook, FaGithub} from 'react-icons/fa'

const TeamMember = () => {
    return (
        <div className="mb-4">
            <h4 className=' justify-center text-2xl mb-8 underline font-bold hover:text-orange-200 text-center'>Our Team Member</h4>
           <div className="grid grid-cols-2 gap-6 m-[200px]">
                 {/*for team or fade design */}
            <div data-aos="flip-left" className="ml-10 ">
            <div className="card card-side bg-red-700 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/C0qgLxp/depositphotos-197614896-stock-photo-image-happy-young-business-woman.webp" alt="Movie"/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-white">Arina Huque</h2>
         <h2 className="card-title text-white">Managements Team</h2>
         <div className='flex' >
         <p > <BsInstagram ></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
        </div>
        </div>
            </div>
            {/** */}
            <div data-aos="flip-right" className="ml-10 ">
            <div className="card card-side bg-red-700 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/Qdt5MXt/depositphotos-23439510-indian-manager-in-her-office.webp" alt="Movie"/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-white">Bushra</h2>
         <h2 className="card-title text-white">Managements Team</h2>
         <div className='flex' >
         <p > <BsInstagram ></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
        </div>
        </div>
            </div>
            
            {/** */}
            <div data-aos="flip-left" className="ml-10 ">
            <div className="card card-side bg-red-700 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/4YrhJ4W/Pixelstudioproductions-com-5.jpg" alt="Movie"/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-white">Afiya</h2>
         <h2 className="card-title text-white"> Managements Team </h2>
         <div className='flex' >
         <p > <BsInstagram ></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
        </div>
        </div>
            </div>
            {/** */}
            <div data-aos="flip-right" className="ml-10 ">
            <div className="card card-side bg-red-700 border border-black h-[300px] w-[500px]  shadow-xl">
        <figure className="pl-3"><img className="h-[200px] w-[250px] border " src="https://i.ibb.co/L1Fwwph/1200x1800-Landscape-Sample.jpg" alt=""/></figure>
         <div className="card-body mt-[70px]">
         <h2 className="card-title text-white">Munmun</h2>
         <h2 className="card-title text-white">Management Team</h2>
         <div className='flex' >
         <p > <BsInstagram ></BsInstagram> </p>
         <p><BiLogoLinkedinSquare></BiLogoLinkedinSquare></p>
         <p><FaFacebook></FaFacebook></p>
         <p> <FaGithub></FaGithub> </p>

         </div>
        </div>
        </div>
            </div>
           
            
           </div>
        </div>
    );
};

export default TeamMember;