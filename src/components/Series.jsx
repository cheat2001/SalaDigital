import React from 'react'
import Movie from './Movie'
import MovieBlock from './MovieBlock'

function Series() {
  return (
    <div className=" w-[100%] bg-[#094655] absolute top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px"/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px"/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px"/>
  
  </div>
  )
}

export default Series