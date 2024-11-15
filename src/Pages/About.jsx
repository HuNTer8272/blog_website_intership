import React from 'react'
import img from '../assets/Images/about us.png';
import { GiPolarStar } from "react-icons/gi";
import "../index.css";
function About() {


  return (
    <div className="pt-28  bg-red-200 flex px-10 flex-col md:flex-row items-center ">
      <div className="bg-emerald-200 h-[450px]  flex justify-centeritems-center xl:pl-20 px-5  relative  ">
        <GiPolarStar className='text-6xl -left-1  w=3xl:text-[120px] absolute xl:left-6 text-l-black top-[80px]' />
        <img src={img} className='my-9 w-auto h-[400px] md:h-[400px]   3xl:h-[700px]  3xl:w-[600px] bg-eee object-contain rounded-[8px]' />
        <h1 className='right-2 text-2xl font-semibold 3xl:text-[90px] md:text-[45px] md:left-[250px]   font-poppins absolute text-l-black top-[60px] 3xl:left-[480px] pt-5 '>AboutUs</h1>
      </div>
      <div className="bg-blue-200 w-auto p-5 md:h-[450px] md:w-[90%] md:pt-32 hide xl:pt-[200px] xl:w-[62%] xl:p-20 xl:pl-20 xl:my-9 ">
        <div className="bg-purple-200 md:h-full space-y-3 text-[#808080] text-[13px] leading-[1.5] ">
         <p>Welcome to our captivating blog where imagination, exploration, and innovation collide! Immerse yourself in the world of movies, traveling, and coding. From cinematic wonders to awe-inspiring destinations and cutting-edge technology, we've got you covered. Unveil hidden treasures, ignite your wanderlust, and unlock the power of coding. Join us for an extraordinary adventure filled with entertainment, inspiration, and limitless possibilities. Get ready to embark on an unforgettable journey with our captivating content!</p>
        </div>
      </div>
    </div>
  )
}

export default About