import React from 'react';
import BannerImg from '../../assets/vector1.png'
const Banner = () => {
    return (
 <div className="flex gap-4 max-w-[600px] mx-auto mt-2">
  {/* Card 1 */}
  <div className="card card-dash bg-white w-96"
    style={{
       height: '200px', 
      backgroundImage:`url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="card-body flex items-center gap-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <img src={BannerImg} alt="" className="w-12 h-12"/>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg">Resolved</h2>
        <span className=" text-2xl ">0</span>
      </div>
    </div>
  </div>

  {/* Card 2 with gradient background */}
  <div className="card card-dash w-96 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white">
    <div className="card-body flex items-center gap-4"
     style={{
         height: '200px',
      backgroundImage: `url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <img src={BannerImg} alt="" className="w-12 h-12"/>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg">In-Progress</h2>
        <span className='text-2xl mt-1'>0</span>
      </div>
    </div>
  </div>
</div>





    );
};

export default Banner;