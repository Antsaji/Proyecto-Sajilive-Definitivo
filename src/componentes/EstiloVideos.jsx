/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { videos } from '../data/videos'
import VideoViwever from './VideoViwer'

export default function EstiloVideos () {
  const [videitos, setVideitos] = useState([])

  const { video } = useParams()
  console.log(video)

  useEffect(() => {
    const recibidas = videos(video)
    setVideitos(recibidas[video])
  }, [])

  const[rutaE,setRutaE]=useState("")
  const[viewer,setViewer]=useState(false)

  function pulsado(e,enlace){
    e.preventDefault()
    setRutaE(enlace)
    console.log("La ruta es"+enlace)
    setViewer(true)
  }
  
  return (
    <div className='place-items-center'>
    <div className='flex md:flex-row flex-col gap-4 mt-2 w-fit px-14 h-fit'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col gap-4'>
          {videitos.map((name, index) => {
            if (index % 3 == 0)
              
              return (
                <video
                  key={index}
                  src={`/videos/${video}/${name}`}
                  
                  alt={`Video ${index}`}
                  //className='rounded-lg shadow-md max-h-screen h-200 transform transition duration-500 hover:scale-101' 
                  className='rounded-lg  max-h-screen  transition duration-500 hover:scale-101'
                  
                  onClick={e=>pulsado(e,"/videos/"+video+"/"+name)}
                  muted loop onMouseEnter={(e)=>e.target.play()} onMouseLeave={(e)=>e.target.pause()}
                />
              )
          })}
        </div>
        <div className='flex flex-col gap-4'>
        {videitos.map((name, index) => {
            if (index % 3 == 1)
              return (
                <video
                  key={index}
                  src={`/videos/${video}/${name}`}
                  alt={`Video ${index}`} 
                  className='rounded-lg  max-h-screen transform transition duration-500 hover:scale-101' 
                  onClick={e=>pulsado(e,"/videos/"+video+"/"+name)}
                  muted loop onMouseEnter={(e)=>e.target.play()} onMouseLeave={(e)=>e.target.pause()}
                />
              )
          })}
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        {videitos.map((name, index) => {
            if (index % 3 == 2)
              return (
                <video
                  key={index}
                  src={`/videos/${video}/${name}`}
                  alt={`Video ${index}`}
                  className='rounded-lg  max-h-screen transform transition duration-500 hover:scale-101' 
                  onClick={e=>pulsado(e,"/videos/"+video+"/"+name)}
                  muted loop onMouseEnter={(e)=>e.target.play()} onMouseLeave={(e)=>e.target.pause()}
                />
              )
          })}
        </div>
      
      {viewer &&  <div>
        <VideoViwever ruta={rutaE} setViewer={setViewer}>
        </VideoViwever>
        </div>}
    </div>
    </div>
  )}
