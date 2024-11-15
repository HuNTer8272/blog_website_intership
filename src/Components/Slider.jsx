import React,{useEffect, useState} from 'react'
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io"; 
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides =[
    {
    url:'https://images.unsplash.com/photo-1686323604920-57c989b7ad87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'     
  },
    {
     url:'https://plus.unsplash.com/premium_photo-1673329272515-e5373f10082b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80'
    }, 
    {
     url:'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },        
    {
     url:'https://images.unsplash.com/photo-1618714418503-fab6e24f85ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },    
    {
    url:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
]
   const [currentIndex,setCurrentIndex] = useState(0)

   const prevSlide =()=>{
     const isFirstSlide = currentIndex ===0;
     const newIndex = isFirstSlide? slides.length-1 : currentIndex - 1;
     setCurrentIndex(newIndex);
   }

   const nextSlide = ()=>{
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
   }

   const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex);
   }

   const dotColor =(slideIndex)=>{
    const color = slideIndex===currentIndex?'#000000':'#808080';
    return color
   }
  
   useEffect(()=>{
    const interval = setInterval(()=>{
      nextSlide()
    },15000);
    return () => clearInterval(interval);
   })
  
  return (
    <div className="2xl:px-0 pb-6 py-24  ">
    <div className='maxw-[800px] h-[500px] sm:h-[700px] lg:h-[700px]  xl:px-20  w-auto m-auto py-5 xl:h-[750px]  px-10  relative group ease-out '>
       <div style={{backgroundImage:  `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl  bg-cover bg-no-repeat bg-center ease-in-out duration-700 ">
       <img src={`${slides[currentIndex].url}`} className="w-full h-full rounded-2xl   bg-cover bg-no-repeat bg-center duration-500 "/>
       <IoIosArrowDropleft  onClick={prevSlide} className='hidden drop-shadow-xl group-hover:block ease-in-out transition-all duration-300 text-5xl  text-gray-700 absolute top-[45%] -translate-x-0 translate-y-[-50%] left-10  xl:left-20 p-2 cursor-pointer'/>
       <IoIosArrowDropright onClick={nextSlide} className='hidden drop-shadow-2xl group-hover:block ease-in-out transition-all duration-300 text-5xl text-gray-700 absolute top-[45%] -translate-x-0 translate-y-[-50%] right-10 xl:right-20 p-2 cursor-pointer'/>
       <div className="flex top-4 justify-center py-2">
          {slides.map((slide,slideIndex)=>(
            <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
              <RxDotFilled style={{color:`${dotColor(slideIndex)}`}} className='hover:text-l-black'/>
            </div>
          ))}
       </div>
    </div>
    </div>
    </div>
  )
}

export default Slider