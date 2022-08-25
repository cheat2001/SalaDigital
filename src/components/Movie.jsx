import React from 'react'
import Batman from '../Images/batman.jpg'
function Movie({Wth,Hth,Img,Title}) {
   console.log(Title);
  return (
    <div className={`shadow-2xl hover:scale-95 active:scale-75 duration-300 cursor-pointer relative w-[300px] h-[200px] rounded-xl overflow-hidden bg-orange-500 sm:w-[${Wth}] sm:h-[${Hth}]`}>
        <img src={Img} alt="" className={`object-cover h-[200px] w-[300px] sm:w-[${Wth}] sm:h-[${Hth}]`} />
        <div className='absolute bottom-2 left-2 '>
            <h1 style={{fontSize:"35px"}}>{Title}</h1>
            <p>2022</p>
        </div>
    </div>
  )
}

export default Movie