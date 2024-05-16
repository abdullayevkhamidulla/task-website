import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import Navbar from './components/navbar';
import Hero from './components/hero';
import Online from './components/online';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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

function App() {
  
  return (
    <div className='bg-[#F4F7FD] h-auto pb-[100px]'>
       <Navbar/>
      <div className="w-[100%] h-auto flex flex-wrap pb-3 justify-center  gap-[40px] items-center bg-gradient-to-r from-[#765707] to-[#085465]">
        <img src='./imgs/navbar5.png' alt="img" />
        <img src='./imgs/navbar4.png' alt="img" />
        <img src='./imgs/navbar3.png' alt="img" />
        <div id='bir' className='w-[148px] h-[93px] text-center flex items-center justify-center'>
        <p className='text-[45px] text-[white] font-bold'>10</p>
        </div>
        <button className='w-[191px] h-[60px] flex gap-2 items-center justify-center text-[24px] text-[white] font-semibold rounded-md bg-[#10C5C5]'>
        <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.4127 19.1062C23.9816 19.1062 28.4949 14.9967 28.4949 9.92622C28.4949 4.85574 23.9816 0.746277 18.4127 0.746277C12.8439 0.746277 8.33047 4.85574 8.33047 9.92622C8.33047 14.9967 12.8439 19.1062 18.4127 19.1062ZM25.4703 21.4012H24.1549C22.4062 22.1327 20.4607 22.5487 18.4127 22.5487C16.3648 22.5487 14.4271 22.1327 12.6706 21.4012H11.3551C5.5106 21.4012 0.768799 25.7186 0.768799 31.0401V34.0236C0.768799 35.9241 2.4623 37.4661 4.54964 37.4661H32.2758C34.3631 37.4661 36.0566 35.9241 36.0566 34.0236V31.0401C36.0566 25.7186 31.3148 21.4012 25.4703 21.4012Z" fill="white"/>
        </svg>
        JOIN NOW
        </button>
         
      </div>
      <Hero/>
      <img src='./imgs/town.png' alt='img' className='w-[100%]'/>
      <Online/>
      <div className='w-[100%] h-auto text-center justify-between flex flex-col   items-center '>
          <h1 className='text-[40px] mt-[110px]'>A New Crash Course Has Arrived</h1>
          <div className='flex-wrap h-auto mb-[60px] mt-[100px] gap-[30px] flex justify-between '>
            <div className='w-[270px] h-[290px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl'>
              <img src='imgs/pink.png'/>
              <p className='text-[18px] px-2 w-[250px] text-left'>SSC 2023 Last Minute Preparation Course[Science Department]</p>
              <h1 className='text-[#017575] text-[20px] px-2 mt-3 font-semibold text-left'>$ 500</h1>
            </div>
            <div className='w-[270px] h-[290px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl'>
              <img src='imgs/pink.png'/>
              <p className='text-[18px] px-2 w-[250px] text-left'>SSC 2023 Last Minute Preparation Course[Science Department]</p>
              <h1 className='text-[#017575] text-[20px] px-2 mt-3 font-semibold text-left'>$ 500</h1>
            </div>
            <div className='w-[270px] h-[290px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl'>
              <img src='imgs/pink.png'/>
              <p className='text-[18px] px-2 w-[250px] text-left'>SSC 2023 Last Minute Preparation Course[Science Department]</p>
              <h1 className='text-[#017575] text-[20px] px-2 mt-3 font-semibold text-left'>$ 500</h1>
            </div>
            <div className='w-[270px] h-[290px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl'>
              <img src='imgs/pink.png'/>
              <p className='text-[18px] px-2 w-[250px] text-left'>SSC 2023 Last Minute Preparation Course[Science Department]</p>
              <h1 className='text-[#017575] text-[20px] px-2 mt-3 font-semibold text-left'>$ 500</h1>
            </div>
          </div>
      </div> 

      <div id="skill" className=' section w-[100%] h-auto mt-[40px] text-center pb-[100px] relative bg-[#000000]'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[white] flex mt-[20px] items-center text-xl sm:text-[16px]'>
              <img src='./imgs/rocket.png' alt='img' className='w-6 h-6 mr-2'/>
              SKILL
            </h1>
            <h2 className='text-white text-2xl sm:text-[28px] font-medium mt-[29px]'>
              The best skill development platform in the country
            </h2>
            <div className='flex justify-around mt-[41px] gap-[100px] flex-wrap'>
              <p className='text-white flex items-center gap-2 text-sm sm:text-base'>
                <img src='./imgs/mark.png' alt='img' className='w-8 h-8'/>
                The best teacher in the country
              </p>
              <p className='text-white flex items-center gap-2 text-sm sm:text-base'>
                <img src='./imgs/mark.png' alt='img' className='w-8 h-8'/>
                5 lakh+ students
              </p>
              <p className='text-white flex items-center gap-2 text-sm sm:text-base'>
                <img src='./imgs/mark.png' alt='img' className='w-8 h-8'/>
                70+ online courses
              </p>
            </div>
            <div className='h-auto bg-[#131831] flex flex-col px-[20px] py-[20px] sm:px-[40px] sm:py-[40px] rounded-xl justify-center items-center mt-[78px]'>
              <h1 className=' font-extrabold text-white mb-[20px] text-center sm:text-[21px] text-[16px]'>
                The best companies in the country are taking our Corporate Skills Development Programme
              </h1>
              <img src='./imgs/logos.png' alt='img' />
            </div>
          </div>
        </div>


      
      <div className='w-[100%] h-auto text-center pb-[57px] flex flex-col items-center'>
        <p className='flex items-center gap-2 mt-[83px]'>
          <img src='./imgs/icon.png'/>
          Admission Test
        </p>
        <h1 className='text-[45px] mt-[23px]'>Complete preparation for dream university</h1>
        <p className='text-[16px] mt-[16px]'>Complete preparation for dream university</p>
        <div className='w-[80%] h-auto'>
            <Slider {...settings}>
            {data1.map((d)=>(
            <div className='w-[100%] h-[300px]  flex gap-5 mt-[45px] '>
              <div className='flex w-[270px] h-[280px] flex-col text-left bg-[white] rounded-md  shadow-xl'>
                <img src={d.img} className='w-[270px] h-[160px] rounded-md'/>

                <p className='text-[18px] px-[4px]'>Medical Admission Course - 2022</p>
                <p className='text-[20px] font-semibold mt-5 text-[#017575]  px-[4px]'>$ 500</p>
              </div>
              
            </div>
            ))}
            </Slider>
            
          </div>
          <button className='bg-[#0ABEBE] w-[268px] h-[61px] flex justify-center mt-[60px] items-center gap-5 font-bold rounded-xl text-white'>CHOICE CLASS FOR <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.251 10.0957L4.49605 17.8507C3.96004 18.3867 3.09331 18.3867 2.563 17.8507L1.2743 16.562C0.738297 16.026 0.738297 15.1593 1.2743 14.629L6.77123 9.13208L1.2743 3.63515C0.738297 3.09915 0.738297 2.23241 1.2743 1.70211L2.5573 0.402005C3.09331 -0.134002 3.96004 -0.134002 4.49035 0.402005L12.2453 8.157C12.787 8.69301 12.787 9.55974 12.251 10.0957Z" fill="#FCEFEF"/>
          </svg>
          </button>
      </div>

      <div id="preparation" className='section w-[100%] bg-[white] h-auto text-center pb-[57px] flex flex-col items-center'>
        <p className='flex items-center gap-2 mt-[83px]'>
          <img src='./imgs/icon.png'/>
          job preparation
        </p>
        <h1 className='text-[45px] mt-[23px]'>Complete preparation for dream university</h1>
        <p className='text-[16px] mt-[16px]'>BCS or bank job - whatever the target, the solution is here!</p>
        <div className='w-[80%] h-auto'>
            <Slider {...settings}>
            {data1.map((d)=>(
            <div className='w-[100%] h-[300px] flex justify-between mt-[45px] '>
              <div className='flex w-[270px] h-[280px] flex-col text-left bg-[white] rounded-md  shadow-xl'>
                <img src={d.img} className='w-[270px] h-[160px] rounded-md'/>

                <p className='text-[18px] px-[4px]'>Medical Admission Course - 2022</p>
                <p className='text-[20px] mt-4 font-semibold text-[#017575]  px-[4px]'>$ 500</p>
              </div>
              
            </div>
            ))}
            </Slider>
            
          </div>
          <button className='bg-[#0ABEBE] w-[268px] h-[61px] flex justify-center mt-[60px] items-center gap-5 font-bold rounded-xl text-white'>CHOICE CLASS FOR <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.251 10.0957L4.49605 17.8507C3.96004 18.3867 3.09331 18.3867 2.563 17.8507L1.2743 16.562C0.738297 16.026 0.738297 15.1593 1.2743 14.629L6.77123 9.13208L1.2743 3.63515C0.738297 3.09915 0.738297 2.23241 1.2743 1.70211L2.5573 0.402005C3.09331 -0.134002 3.96004 -0.134002 4.49035 0.402005L12.2453 8.157C12.787 8.69301 12.787 9.55974 12.251 10.0957Z" fill="#FCEFEF"/>
          </svg>
          </button>
      </div>

      <div className='w-[100%] h-auto flex justify-center mt-[60px] bg-white pb-[100px] pt-8'>
          <div className='w-[85%] h-auto flex flex-wrap justify-around bg-gradient-radial rounded-2xl'>
              <div className='w-[580px] flex flex-col items-center p-3'>
                <h1 className='text-[40px] p-2 px-5 text-[white] font-bold text-center leading-[48px]'>Explore the “Free Downloads” section to download class notes and lecture sheets created by the best teachers</h1>
                <button className='bg-[#0ABEBE] w-[268px] h-[61px] flex justify-center mt-[30px] items-center gap-5 font-bold rounded-xl text-white'>JOIN FREE CLASS <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.251 10.0957L4.49605 17.8507C3.96004 18.3867 3.09331 18.3867 2.563 17.8507L1.2743 16.562C0.738297 16.026 0.738297 15.1593 1.2743 14.629L6.77123 9.13208L1.2743 3.63515C0.738297 3.09915 0.738297 2.23241 1.2743 1.70211L2.5573 0.402005C3.09331 -0.134002 3.96004 -0.134002 4.49035 0.402005L12.2453 8.157C12.787 8.69301 12.787 9.55974 12.251 10.0957Z" fill="#FCEFEF"/>
                  </svg>
                  </button>
              </div>
              <img src='./imgs/girls.png'/>
          </div>
      </div>
      <div id='join' className='w-[100%] h-[600px] flex flex-col items-center justify-center'>
          <h1 className='text-[47px] font-thin mb-[60px]'>Join today Bangladesh's largest learning platform</h1>
          <button className='bg-[#0ABEBE] w-[328px] h-[96px] text-[27px] flex justify-center mb-[70px] items-center gap-5 font-bold rounded-xl text-white'>JOIN FREE CLASS<svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.251 10.0957L4.49605 17.8507C3.96004 18.3867 3.09331 18.3867 2.563 17.8507L1.2743 16.562C0.738297 16.026 0.738297 15.1593 1.2743 14.629L6.77123 9.13208L1.2743 3.63515C0.738297 3.09915 0.738297 2.23241 1.2743 1.70211L2.5573 0.402005C3.09331 -0.134002 3.96004 -0.134002 4.49035 0.402005L12.2453 8.157C12.787 8.69301 12.787 9.55974 12.251 10.0957Z" fill="#FCEFEF"/>
          </svg>
          </button>
      </div>
      
      <div className='w-[100%] h-auto flex items-center flex-wrap justify-evenly py-[60px]  bg-white'>
          <div className='w-[760px] h-auto  flex gap-6 items-center  flex-wrap p-[10px]'>
            <div className='w-[350px] h-[200px] bg-[#ffa552] rounded-xl flex items-center flex-col justify-center'>
              <h1 className='text-[54px] text-white font-bold'>1 Crore +</h1>
              <p className='text-[24px] text-white mb-[40px] text-right'>Total students</p>
            </div>
            <div className='w-[350px] h-[200px] bg-[#49ffa7] rounded-xl flex items-center flex-col justify-center'>
              <h1 className='text-[54px] text-white font-bold'>1 Crore +</h1>
              <p className='text-[24px] text-white mb-[40px] text-right'>Total students</p>
            </div>
            <div className='w-[350px] h-[200px] bg-[#dbff49] rounded-xl flex items-center flex-col justify-center'>
              <h1 className='text-[54px] text-white font-bold'>1 Crore +</h1>
              <p className='text-[24px] text-white mb-[40px] text-right'>Total students</p>
            </div>
            <div className='w-[350px] h-[200px] bg-[#d255ff] rounded-xl flex items-center flex-col justify-center'>
              <h1 className='text-[54px] text-white font-bold'>1 Crore +</h1>
              <p className='text-[24px] text-white mb-[40px] text-right'>Total students</p>
            </div>
          </div>
          <img src='./imgs/girls3.png' className='w-[600px] h-[360px]'/>
      </div>
      <div className='w-[100%] h-auto  flex  flex-col items-center  gap-5 py-5 justify-around'>
          <div className='w-[90%] h-auto bg-[#22214C] rounded-xl px-9 pb-8 '>
            <h1 className='text-[white] text-[27px] font-bold mt-[33px]'>Call for any information regarding the course</h1>
            <p className='text-[22px] ms-3 text-gray-400'>8 am to 11 pm</p>
          </div>
          <div className='w-[95%] h-auto bg-[#22214C] rounded-xl flex flex-wrap gap-[100px] px-5 justify-between'>
            <div className='w-[550px] h- flex flex-col items-center p-5 justify-around'>
              <h1 className='text-[42px] text-white font-medium text-center'>Download our mobile app, start learning today</h1>
              <div className='flex gap-3'>
                <img src='./imgs/app.png'/>
                <img src='./imgs/google.png'/>
              </div>
            </div>
            <img src='./imgs/phone.png' className='mr-[200px] ' />  
          </div>
      </div>



    </div>
    
  );
}

const data1=[
  {
    img:`/imgs/slide5.png`
  },
  {
    img:`/imgs/slide6.png`
  },
  {
    img:`/imgs/slide7.png`
  },
  {
    img:`/imgs/slide5.png`
  },
  {
    img:`/imgs/slide6.png`
  },
  {
    img:`/imgs/slide7.png`
  }
]
export default App;
