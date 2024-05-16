import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };



  return (
    <div className='w-[100%] h-[auto flex justify-center flex-col items-center pb-[100px]'>
        <div id="batch" className=' section w-[90%] h-auto bg-[#10525B] text-center flex mt-[95px] flex-col items-center  pb-[60px]'>
         
            <h1 className='text-[white] mt-[86px] text-[45px] font-bold'>Online batch admission of 2023 is going on!</h1>
            <p className='text-[15px] mt-2 text-[white] font-medium'>6-10 live classes per week depending on class, along with lecture sheets and regular exam facility</p>
            <div  id="class" className='section w-[75%] h-auto justify-around   mt-[45px] flex flex-wrap'>
              <div className='w-[150px] h-[225px] text-center bg-white rounded-lg flex flex-col  items-center'>
                <img className='w-[51px] h-[51px] mt-[20px]' src='./imgs/bag.png' alt="" />
                <h1 className='text-[23px] mt-[15px]  font-semibold'>CLASS 10</h1>
                <p className='text-[13px] mt-[5px] mb-[15px]'>is simply dummy text of th  printing and typesetting industry.</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69231 1.02756L7.4722 0.247668C7.80242 -0.082556 8.3364 -0.082556 8.66311 0.247668L15.4924 7.07347C15.8227 7.40369 15.8227 7.93767 15.4924 8.26438L8.66311 15.0937C8.33289 15.4239 7.79891 15.4239 7.4722 15.0937L6.69231 14.3138C6.35857 13.9801 6.3656 13.4356 6.70636 13.1088L10.9396 9.07589H0.843125C0.375893 9.07589 0 8.7 0 8.23277V7.1086C0 6.64137 0.375893 6.26548 0.843125 6.26548H10.9396L6.70636 2.23253C6.36208 1.90581 6.35506 1.3613 6.69231 1.02756Z" fill="black" fill-opacity="0.51"/>
                </svg>

              </div>
              <div className='w-[150px] h-[225px] text-center bg-white rounded-lg flex flex-col  items-center'>
                <img className='w-[51px] h-[51px] mt-[20px]' src='./imgs/bag.png' alt="" />
                <h1 className='text-[23px] mt-[15px]  font-semibold'>CLASS 09</h1>
                <p className='text-[13px] mt-[5px] mb-[15px]'>is simply dummy text of th  printing and typesetting industry.</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69231 1.02756L7.4722 0.247668C7.80242 -0.082556 8.3364 -0.082556 8.66311 0.247668L15.4924 7.07347C15.8227 7.40369 15.8227 7.93767 15.4924 8.26438L8.66311 15.0937C8.33289 15.4239 7.79891 15.4239 7.4722 15.0937L6.69231 14.3138C6.35857 13.9801 6.3656 13.4356 6.70636 13.1088L10.9396 9.07589H0.843125C0.375893 9.07589 0 8.7 0 8.23277V7.1086C0 6.64137 0.375893 6.26548 0.843125 6.26548H10.9396L6.70636 2.23253C6.36208 1.90581 6.35506 1.3613 6.69231 1.02756Z" fill="black" fill-opacity="0.51"/>
                </svg>

              </div>
              <div className='w-[150px] h-[225px] text-center bg-white rounded-lg flex flex-col  items-center'>
                <img className='w-[51px] h-[51px] mt-[20px]' src='./imgs/bag.png' alt="" />
                <h1 className='text-[23px] mt-[15px]  font-semibold'>CLASS 08</h1>
                <p className='text-[13px] mt-[5px] mb-[15px]'>is simply dummy text of th  printing and typesetting industry.</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69231 1.02756L7.4722 0.247668C7.80242 -0.082556 8.3364 -0.082556 8.66311 0.247668L15.4924 7.07347C15.8227 7.40369 15.8227 7.93767 15.4924 8.26438L8.66311 15.0937C8.33289 15.4239 7.79891 15.4239 7.4722 15.0937L6.69231 14.3138C6.35857 13.9801 6.3656 13.4356 6.70636 13.1088L10.9396 9.07589H0.843125C0.375893 9.07589 0 8.7 0 8.23277V7.1086C0 6.64137 0.375893 6.26548 0.843125 6.26548H10.9396L6.70636 2.23253C6.36208 1.90581 6.35506 1.3613 6.69231 1.02756Z" fill="black" fill-opacity="0.51"/>
                </svg>

              </div>
              <div className='w-[150px] h-[225px] text-center bg-white rounded-lg flex flex-col  items-center'>
                <img className='w-[51px] h-[51px] mt-[20px]' src='./imgs/bag.png' alt="" />
                <h1 className='text-[23px] mt-[15px]  font-semibold'>CLASS 07</h1>
                <p className='text-[13px] mt-[5px] mb-[15px]'>is simply dummy text of th  printing and typesetting industry.</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69231 1.02756L7.4722 0.247668C7.80242 -0.082556 8.3364 -0.082556 8.66311 0.247668L15.4924 7.07347C15.8227 7.40369 15.8227 7.93767 15.4924 8.26438L8.66311 15.0937C8.33289 15.4239 7.79891 15.4239 7.4722 15.0937L6.69231 14.3138C6.35857 13.9801 6.3656 13.4356 6.70636 13.1088L10.9396 9.07589H0.843125C0.375893 9.07589 0 8.7 0 8.23277V7.1086C0 6.64137 0.375893 6.26548 0.843125 6.26548H10.9396L6.70636 2.23253C6.36208 1.90581 6.35506 1.3613 6.69231 1.02756Z" fill="black" fill-opacity="0.51"/>
                </svg>

              </div>
              <div className='w-[150px] h-[225px] text-center bg-white rounded-lg flex flex-col  items-center'>
                <img className='w-[51px] h-[51px] mt-[20px]' src='./imgs/bag.png' alt="" />
                <h1 className='text-[23px] mt-[15px]  font-semibold'>CLASS 06</h1>
                <p className='text-[13px] mt-[5px] mb-[15px]'>is simply dummy text of th  printing and typesetting industry.</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.69231 1.02756L7.4722 0.247668C7.80242 -0.082556 8.3364 -0.082556 8.66311 0.247668L15.4924 7.07347C15.8227 7.40369 15.8227 7.93767 15.4924 8.26438L8.66311 15.0937C8.33289 15.4239 7.79891 15.4239 7.4722 15.0937L6.69231 14.3138C6.35857 13.9801 6.3656 13.4356 6.70636 13.1088L10.9396 9.07589H0.843125C0.375893 9.07589 0 8.7 0 8.23277V7.1086C0 6.64137 0.375893 6.26548 0.843125 6.26548H10.9396L6.70636 2.23253C6.36208 1.90581 6.35506 1.3613 6.69231 1.02756Z" fill="black" fill-opacity="0.51"/>
                </svg>

              </div>
            </div>
            <p className='text-[18px] text-[#09F7F7] mt-[20px] font-extralight'>Know more about online batch</p>
          
          <div id="admission" className=' section w-[80%] h-auto'>
            <h1 className='text-[white] text-[59px] font-bold'>New Year, New Skills</h1>
            <p className='text-[27px] mt-2 text-[white] font-medium'>Ten Minute School courses and bundles will be available for more savings in the new yea</p>
            <Slider {...settings}>
            {data.map((d)=>(
            <div className='w-[100%] h-[280px] flex justify-between mt-[45px] '>
              <img src={d.img} className='w-[198px] h-[280px]'/>
            </div>
            ))}
            </Slider>
            
          </div>
          
        </div>

            <div className='h-auto mt-8 text-center flex flex-col items-center leading-10 bg-[#F4F7FD] p-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold mt-7'>
                    Organize Your Own Learning
                    <br />
                    Let the Journey Begin
                </h1>
                <p className='text-lg md:text-xl mt-5'>
                    Go to the section of your choice to learn anything on any topic
                </p>
                <div className='mt-10 h-auto flex flex-wrap justify-center gap-12'>
                    <div className='w-full md:w-[540px] h-[150px] flex items-center rounded-xl border border-gray-500 p-8'>
                    <img src='./imgs/own1.png' alt='img' className='w-16 h-16'/>
                    <div className='ml-4 flex-grow'>
                        <h1 className='text-xl md:text-3xl font-normal mb-4'>CLASS 5-12</h1>
                        <p className='text-sm md:text-base mt-1'>FREE CLASS, LIVE CLASS</p>
                    </div>
                    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5491 15.699L4.08225 28.1658C3.48098 28.7671 2.50618 28.7671 1.90498 28.1658L0.450932 26.7118C-0.149304 26.1115 -0.150459 25.1387 0.448367 24.5371L10.3286 14.6103L0.448367 4.6837C-0.150459 4.08205 -0.149304 3.10924 0.450932 2.509L1.90498 1.05495C2.50625 0.453688 3.48105 0.453688 4.08225 1.05495L16.549 13.5217C17.1503 14.1229 17.1503 15.0977 16.5491 15.699Z" fill="black" fill-opacity="0.47"/>
                    </svg>
                    </div>
                    <div className='w-full md:w-[540px] h-[150px] flex items-center rounded-xl border border-gray-500 p-8'>
                    <img src='./imgs/own3.png' alt='img' className='w-16 h-16'/>
                    <div className='ml-4 flex-grow'>
                        <h1 className='text-xl md:text-3xl font-normal mb-4'>SKILL</h1>
                        <p className='text-sm md:text-base mt-1'>FREE CLASS, LIVE CLASS</p>
                    </div>
                    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5491 15.699L4.08225 28.1658C3.48098 28.7671 2.50618 28.7671 1.90498 28.1658L0.450932 26.7118C-0.149304 26.1115 -0.150459 25.1387 0.448367 24.5371L10.3286 14.6103L0.448367 4.6837C-0.150459 4.08205 -0.149304 3.10924 0.450932 2.509L1.90498 1.05495C2.50625 0.453688 3.48105 0.453688 4.08225 1.05495L16.549 13.5217C17.1503 14.1229 17.1503 15.0977 16.5491 15.699Z" fill="black" fill-opacity="0.47"/>
                    </svg>
                    </div>
                    <div className='w-full md:w-[540px] h-[150px] flex items-center rounded-xl border border-gray-500 p-8'>
                    <img src='./imgs/own2.png' alt='img' className='w-16 h-16'/>
                    <div className='ml-4 flex-grow'>
                        <h1 className='text-xl md:text-3xl font-normal mb-4'>ADMISSION</h1>
                        <p className='text-sm md:text-base mt-1'>FREE CLASS, LIVE CLASS</p>
                    </div>
                    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5491 15.699L4.08225 28.1658C3.48098 28.7671 2.50618 28.7671 1.90498 28.1658L0.450932 26.7118C-0.149304 26.1115 -0.150459 25.1387 0.448367 24.5371L10.3286 14.6103L0.448367 4.6837C-0.150459 4.08205 -0.149304 3.10924 0.450932 2.509L1.90498 1.05495C2.50625 0.453688 3.48105 0.453688 4.08225 1.05495L16.549 13.5217C17.1503 14.1229 17.1503 15.0977 16.5491 15.699Z" fill="black" fill-opacity="0.47"/>
                    </svg>
                    </div>
                    <div className='w-full md:w-[540px] h-[150px] flex items-center rounded-xl border border-gray-500 p-8'>
                    <img src='./imgs/own4.png' alt='img' className='w-16 h-16'/>
                    <div className='ml-4 flex-grow'>
                        <h1 className='text-xl md:text-3xl font-normal mb-4'>JOB PREAPARATION</h1>
                        <p className='text-sm md:text-base mt-1'>FREE CLASS, LIVE CLASS</p>
                    </div>
                    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5491 15.699L4.08225 28.1658C3.48098 28.7671 2.50618 28.7671 1.90498 28.1658L0.450932 26.7118C-0.149304 26.1115 -0.150459 25.1387 0.448367 24.5371L10.3286 14.6103L0.448367 4.6837C-0.150459 4.08205 -0.149304 3.10924 0.450932 2.509L1.90498 1.05495C2.50625 0.453688 3.48105 0.453688 4.08225 1.05495L16.549 13.5217C17.1503 14.1229 17.1503 15.0977 16.5491 15.699Z" fill="black" fill-opacity="0.47"/>
                    </svg>
                    </div>
                </div>
            </div>

      </div>
  )
}



const data=[
    {
      img:`/imgs/slide1.png`
    },
    {
      img:`/imgs/slide2.png`
    },
    {
      img:`/imgs/slide3.png`
    },
    {
      img:`/imgs/slide4.png`
    }
  ]
  
export default hero
