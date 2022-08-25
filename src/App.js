import React from 'react'
import LeftSide from './components/LeftSide'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MovieContainer from './components/MovieContainer';
import Series from './components/Series';
import TvShow from './components/TvShow';
import Discovery from './pages/Discovery';
import Community from './pages/Community';
import CommingSoon from './pages/CommingSoon';
function App() {
  return (
    <div>
         <LeftSide/>
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}>
              <Route index element={<MovieContainer/>}/>
              <Route path='series' element={<Series/>}/>
              <Route path='tvshow' element={<TvShow/>}/>
              </Route>
              <Route path='/discovery' element={<Discovery/>} />
              <Route path='/community' element={<Community/>} />
              <Route path='/commingsoon' element={<CommingSoon/>} />
            </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App