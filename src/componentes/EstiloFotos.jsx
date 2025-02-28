/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { fotos } from '../data/imagenes'
import FotoViwever from './FotoViewer'
import Footer from './footer'

export default function EstiloFotos () {
  const [imagenes, setImagenes] = useState([])

  const { foto } = useParams()
  console.log(foto)

  useEffect(() => {
    const recibidas = fotos(foto)
    setImagenes(recibidas[foto])
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
    <div>
      
      <div className='flex md:flex-row flex-col gap-4 mt-2 w-fit px-14 h-fit'>
      <div className=' flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col gap-4'>
          {imagenes.map((name, index) => {
            if (index % 3 == 0)
              return (
                <img
                  key={index}
                  src={`/fotos/${foto}/${name}`}
                  alt={`Foto ${index}`}
                  onClick={e=>pulsado(e,"/fotos/"+foto+"/"+name)}
                  className='rounded-lg shadow-md max-h-screen'
                />
              )
          })}
        </div>
        <div className='flex flex-col gap-4'>
        {imagenes.map((name, index) => {
            if (index % 3 == 1)
              return (
                <img
                  key={index}
                  src={`/fotos/${foto}/${name}`}
                  alt={`Foto ${index}`}
                  onClick={e=>pulsado(e,"/fotos/"+foto+"/"+name)}
                  className=' h-auto rounded-lg shadow-md max-h-screen'
                />
              )
          })}
        </div>
        </div>
        
        <div className='flex flex-col gap-4'>
        
        {imagenes.map((name, index) => {
            if (index % 3 == 2)
              return (
                <img
                  key={index}
                  src={`/fotos/${foto}/${name}`}
                  alt={`Foto ${index}`}
                  onClick={e=>pulsado(e,"/fotos/"+foto+"/"+name)}
                  className=' h-auto rounded-lg shadow-md max-h-screen'
                />
              )
          })}
        </div>
        
      {viewer &&  <div>
              <FotoViwever ruta={rutaE} setViewer={setViewer}>
              </FotoViwever>
              </div>}
              </div>
      
    </div>
  )
}
