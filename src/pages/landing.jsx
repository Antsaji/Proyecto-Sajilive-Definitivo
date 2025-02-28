import Carousel from "../componentes/Carrusel";
import ProfileFoto from "../componentes/ProfileFoto";

export default function Landing() {
  const DATA = [
    { image: "/foto1.jpg" },
    { image: "/foto2.jpg" },
    { image: "/foto3.jpg" },
    { image: "/foto4.jpg" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
      <div className="w-fit mx-auto col-start-1 row-start-1 col-span-2 pt-10 md:pt-0 z-10">
        <div className="grid grid-cols-1 grid-rows-1 place-items-center">
           <img src="fotos/foto_landing.jpg"
           className="fotovertical max-h-190 col-start-1 row-start-1"></img>
           <h3 className="w-fit mx-auto my-8 lema min-h-20 max-w-screen col-start-1 row-start-1 text-7xl text-red-600 z-10 sombraTitulo">The earth is just a rock without the voices of art</h3>
            </div>
            
        </div>
        
        <video 
        src="fondo pagina 1.mp4"
        className="w-screen  col-start-1 row-start-1 col-span-2 pt-10 md:pt-0"
        muted
        autoPlay
        loop
        ></video>
        
        <div className="w-fit mx-auto col-start-1 pt-10 md:pt-0 z-10">
        <div className="place-items-center">
           <ProfileFoto/>
           <p className="w-fit mx-auto col-start-1 mt-8 oswald min-h-20 max-w-xl">Fotógrafo, Videógrafo y Programador Multiplataforma</p>
           <p className="w-fit mx-auto col-start-1  mont min-h-20 max-w-xl">En esta página puedes ver mucho de mis trabajos, si te interesa, contáctame.</p>
            </div>
        
        </div>
        <div className=" mx-auto col-start-1 lg:col-start-2 mt-10">
          <Carousel data={DATA} />
        </div>
        
      </div>
    </div>
  );
}
