import React from 'react'

const online = () => {
  return (
    <div className='w-full h-auto flex justify-center flex-col items-center pb-[100px] bg-white'>
  <div className='w-[90%] h-auto text-center flex flex-col items-center leading-[60px] bg-white'>
    <h1 className='text-[#049999]'>CLASS - 10</h1>
    <h1 className='text-[30px] sm:text-[40px] font-semibold'>
      What is in the online batch throughout the year?
    </h1>
    <p className='text-[15px] sm:text-[17px] mt-[15px]'>
      May the progress of education continue from any part of the country under the care of the best teachers
    </p>
    <div className='flex w-full items-center justify-around mt-[30px] flex-wrap'>
      <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 w-full md:w-auto'>
        <div className='bg-[#F4F7FD] h-auto md:h-[150px] flex flex-col md:flex-row items-center justify-around p-4 rounded-xl shadow-2xl'>
          <svg width="78" height="52" viewBox="0 0 78 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M76.3701 8.09347C75.4731 4.9077 72.83 2.39869 69.4741 1.54722C63.3913 0 39 0 39 0C39 0 14.6088 0 8.52591 1.54722C5.17002 2.39882 2.52695 4.9077 1.62989 8.09347C0 13.8679 0 25.9156 0 25.9156C0 25.9156 0 37.9633 1.62989 43.7377C2.52695 46.9235 5.17002 49.328 8.52591 50.1795C14.6088 51.7267 39 51.7267 39 51.7267C39 51.7267 63.3912 51.7267 69.4741 50.1795C72.83 49.328 75.4731 46.9235 76.3701 43.7377C78 37.9633 78 25.9156 78 25.9156C78 25.9156 78 13.8679 76.3701 8.09347ZM31.0227 36.854V14.9772L51.409 25.9159L31.0227 36.854Z" fill="#F76060"/>
          </svg>
          <div className='w-full md:w-[430px]'>
            <h1 className='text-[18px] sm:text-[21px]'>
              Complete syllabus cover through live classes
            </h1>
            <p className='leading-6 text-[15px] sm:text-[17px]'>
              One teacher will take the class, the second teacher will answer your various questions
            </p>
          </div>
        </div>
        <div className='bg-[#F4F7FD] w-full md:w-[611px] h-auto md:h-[83px] flex px-4 sm:px-10 items-center rounded-xl border-[0.5px] border-black'>
          <img src='./imgs/note.png' className='me-[20px] sm:me-[50px]'/>
          <p className='text-[18px] sm:text-[21px]'>Lecture sheets and recorded classes</p>
        </div>
        <div className='bg-[#F4F7FD] w-full md:w-[611px] h-auto md:h-[83px] flex px-4 sm:px-10 items-center rounded-xl border-[0.5px] border-black'>
          <img src='./imgs/note2.png' className='me-[20px] sm:me-[50px]'/>
          <p className='text-[18px] sm:text-[21px]'>Lecture sheets and recorded classes</p>
        </div>
      </div>
      <img src='./imgs/girl.png' className='w-full md:w-auto mt-6 md:mt-0'/>
    </div>
    <button className='bg-[#0ABEBE] w-[200px] sm:w-[268px] h-[50px] sm:h-[61px] flex justify-center mt-[50px] sm:mt-[100px] items-center gap-3 sm:gap-5 font-bold rounded-xl text-white'>
      CHOICE CLASS FOR 
      <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.251 10.0957L4.49605 17.8507C3.96004 18.3867 3.09331 18.3867 2.563 17.8507L1.2743 16.562C0.738297 16.026 0.738297 15.1593 1.2743 14.629L6.77123 9.13208L1.2743 3.63515C0.738297 3.09915 0.738297 2.23241 1.2743 1.70211L2.5573 0.402005C3.09331 -0.134002 3.96004 -0.134002 4.49035 0.402005L12.2453 8.157C12.787 8.69301 12.787 9.55974 12.251 10.0957Z" fill="#FCEFEF"/>
      </svg>
    </button>
  </div>
</div>

  )
}

export default online
