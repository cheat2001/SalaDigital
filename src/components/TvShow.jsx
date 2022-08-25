import React from 'react'
import MovieBlock from '../components/MovieBlock'
function TvShow() {
  return (
    <div className="w-[100%] bg-[#300f2b] absolute top-[70px] left-0 pl-[70px]">
     <MovieBlock Type="Top Trending" Wth="400px" Hth="300px"/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px"/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px"/>
  </div>
  )
}

export default TvShow