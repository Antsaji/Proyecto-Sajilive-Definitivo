import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './componentes/Navbar'
import Home_fotos from './pages/fotos'
import Landing from './pages/landing'
import Lenis from 'lenis'
import Contact from './pages/Contact'
import Home_videos from './pages/videos'
import EstiloFotos from './componentes/EstiloFotos'
import EstiloVideos from './componentes/EstiloVideos'
import { useEffect } from 'react'

function App () {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[]);
  return (
    <div>
      <BrowserRouter>
        <Body />
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
function Body () {
  const location = useLocation()
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Landing/>} />
        <Route path='/foto' element={<div>foto</div>} />
        <Route path='/video' element={<div>video</div>} />
        <Route path='/foto/estilo/:foto' element={<EstiloFotos/>} />
        <Route path='/video/estilo/:video' element={<EstiloVideos/>} />
        <Route path='/fotos' element={<Home_fotos/>} />
        <Route path='/videos' element={<Home_videos/>} />
        <Route path='/contacto' element={<Contact/>} />
      </Routes>
    </div>
  )
}
export default App
