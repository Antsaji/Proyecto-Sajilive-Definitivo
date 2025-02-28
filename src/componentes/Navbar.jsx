import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <nav className=' w-screen fixed top-0 left-0 shadow-[0px_2px_5px_4px_rgba(0,_0,_0,_0.2)] z-20'>
      <div className='mx-8'>
        <div className='relative flex h-12 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-center sm:justify-start'>
            <div className='flex shrink-0 items-center'>
              <Link to='/' className='pirata text-3xl'>
                Sajilive
              </Link>
            </div>
            <div className=' sm:ml-6 sm:block w-full h-fit'>
              <div className='flex flex-row-reverse sm:justify-start  '>
                <div className='relative text-black hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                >
                <Link to='/contacto' className='px-3 oswald'>
                  Contáctame
                </Link>
                </div>
                <div className='relative text-black hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/videos' className='px-3 oswald'>
                  Vídeos
                </Link>
                </div>
                <div className='relative text-black hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/fotos' className='px-3 oswald'>
                  Fotos
                </Link>
                </div>
                <div className='relative text-black hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                <Link to='/' className='px-3 oswald'>
                  Acerca de mí
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
