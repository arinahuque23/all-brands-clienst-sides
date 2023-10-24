
const TeamMember = () => {
  return (
    <div className="mb-4 ">
      <h4 className=" text-blue-300 text-center text-3xl mb-8 underline font-bold hover:text-orange-200">
        Our Team Member
      </h4>
      <div className="mb-10 gap-4 grid grid-cols-1 lg:grid-cols-3 ml-16">
      <div className="card card-compact bg-pink-200 border w-96  shadow-xl">
        <div className="avatar">
          <div className="w-24 ml-[130px]  mt-2 rounded-full">
            <img src="https://i.ibb.co/BjxdNm1/2219822.png" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="text-xl text-blue-400 text-center">Rafsan Ahmed </h2>
           
        </div>
      </div>
      <div className="card card-compact bg-pink-200  border w-96  shadow-xl">
        <div className="avatar">
          <div className="w-24 mt-2  ml-[130px] rounded-full">
            <img src="https://i.ibb.co/TbY3Bfh/236831.png" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="text-xl text-blue-400 text-center">Pabel Khan </h2>
        </div>
      </div>
      <div className="card card-compact bg-pink-200 border w-96  shadow-xl">
        <div className="avatar">
          <div className="w-24 mt-2 ml-[130px] rounded-full">
            <img src="https://i.ibb.co/8bNnMKY/802009-man-512x512.png"/>
          </div>
        </div>
        <div className="card-body">
          <h2 className="text-xl text-blue-400 text-center">Sazzad Hossain </h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TeamMember;
