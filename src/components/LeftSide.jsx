import React from 'react'
import {MdOutlineCastForEducation,MdMovie,MdOutlineSportsVolleyball} from "react-icons/md"
import {SiDcentertainment} from "react-icons/si"
import {FaRegNewspaper} from "react-icons/fa";
import {GiEarthAsiaOceania} from "react-icons/gi";
function LeftSide() {
  return (
    <div className="flex flex-col  items-center pt-[70px] gap-5 fixed z-10 h-screen w-[70px] bg-[#040213] border-[0.5px] border-[#ffffff28]">
      <a href="#">
        <MdOutlineCastForEducation color='white' size={35}/>
      </a>
      <a href="#">
        <MdMovie color='white' size={35}/>
      </a>
      <a href="#">
        <MdOutlineSportsVolleyball color='white' size={35}/>
      </a>
      <a href="#">
        <FaRegNewspaper color='white' size={35}/>
      </a>
      <a href="#">
        <GiEarthAsiaOceania color='white' size={35}/>
      </a>
    </div>
  )
}

export default LeftSide