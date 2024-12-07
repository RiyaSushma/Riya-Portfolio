import React from 'react';

function FloatingDiv({ image, txt1, txt2 }) {
  return (
    <div className="justify-around flex border-2 dark:border-amber-400 dark:text-white text-black border-pink-300 shadow-2xl shadow-slate-800 opacity-0.5 lg:text-2xl xl:text-2xl md:text-xl sm:text-xl s:text-xl rounded-2xl pl-2 pr-2 xl:pt-2 lg:pt-2 floating-element xs:w-1/2 s:w-1/2 xl:pb-2 lg:pb-2 md:pb-1 xs:pb-1 md:pt-1 s:pb-1 xs:pt-1 s:pt-1 lg:w-full xl:w-full md:w-1/2 backdrop-blur-3xl">
        <img src={image} alt="" className='lg:w-1/8 xl:w-16 md:w-7 xs:w-1/5 s:w-1/5 transform'/>
        <span className='xl:text-xl lg:text-xl md:text-lg sm:text-base xs:text-base p-0 m-0'>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv;