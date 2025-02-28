/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// Carousel.js
import { useEffect, useRef, useState } from 'react'

const Carousel = ({ data }) => {
  // State and Ref initializatio
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  // useEffect to get the initial carousel size
  useEffect(() => {
    if (carouselRef.current) {
      const { width, height } = carouselRef.current.getBoundingClientRect()
      setCarouselSize({ width, height })
    }
  }, [])

  return (
    <div className='flex'>
    <div className='flexbox-align-content'>
      {/* Carousel container */}
      <div className='relative w-80 lg:w-96 overflow-x-hidden rounded-md fotovertical shadow-[3px_3px_14px_4px_rgba(0,_0,_0,_0.2)]'>
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width
          }}
          className='absolute flex w-full transition-all duration-[2000ms]'
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className='relative w-full shrink-0 fotovertical'>
              <img
                className='pointer-events-none '
                alt={`carousel-image-${i}`}
                fill='true'
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className='mt-3 flex justify-center'>
        <button
          onClick={() =>
            setCurrentImg(
              currentImg === 0 ? () => data.length - 1 : prev => prev - 1
            )
          }
          className={`border px-4 py-2 font-bold`}
        >
          {'<'}
        </button>
        <button
          onClick={() =>
            setCurrentImg(
              currentImg === data.length - 1 ? () => 0 : prev => prev + 1
            )
          }
          className={`border px-4 py-2 font-bold`}
        >
          {'>'}
        </button>
      </div>
    </div>
    </div>
  )
}

export default Carousel
