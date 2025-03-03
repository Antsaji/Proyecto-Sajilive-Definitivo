/* eslint-disable no-unused-vars */
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

/*/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

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

