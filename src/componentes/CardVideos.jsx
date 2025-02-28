
import CardV from "./CardV";

export default function CardsVideos(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-1 mt-12 mb-10">
            <div className="col-start-1 lg:col-start-1 transform transition duration-500 filter grayscale hover:grayscale-0 hover:scale-102 flex">
            <CardV ruta="/videosCardVideos/dia.mp4" texto="Dia" enlace="/video/estilo/dia"/>
            </div>
            <div className="col-start-1 lg:col-start-2 transform transition duration-500 filter grayscale hover:grayscale-0 hover:scale-102 flex">
            <CardV ruta="/videosCardVideos/noche.mp4" texto="Noche" enlace="/video/estilo/noche"/>
            </div>
        </div>
        
    );
}