import React from 'react'

const TextData = (props) =>
 {
    const {Html, Javascript, Css} = props;
  return (
    <div className=' text-[#3A1F5E] flex flex-wrap flex-col xl:items-start md:items-center'>       
        <h1 className='font-extrabold text-5xl md:text-6xl'>Simple</h1>
        <h2 className='font-extrabold text-5xl md:text-6xl'>Calculator</h2>
        <p  className='font-bold text-3xl md:text-5xl text-[#5E4985]'>using JavaScript</p>
        <div className='flex mt-6 text-black xl:mb-0 mb-6 sm:mb-14'>
            <div className='flex flex-col items-center justify-center font-extrabold relative left-[13%]'>
                <h1>CSS</h1>
                <div><img className='w-[75px] md:w-[100px]' src={Css} alt='' /></div>
            </div>
            <div className='flex flex-col items-center  justify-center font-extrabold z-10'>
                <h1>HTML</h1>
                <div><img className='w-[100px] md:w-[130px]' src={Html} alt=''  /></div>
            </div>
            <div className='flex flex-col items-center justify-center font-extrabold relative right-[11%]'>
                <h1>JS</h1>
                <div><img className='w-[75px] md:w-[100px]' src={Javascript} alt=''/></div>
            </div>
        </div>
        </div>
  )
}

export default TextData