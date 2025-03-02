import CardsFotos from "../componentes/CardsFotos";
import SliderFotos from "../componentes/SliderFotos";

export default function Home_fotos(){
    return(
        <div className="flex flex-col justify-center items-center">
            <CardsFotos/>
            <p className="oswald text-5xl my-5">Prueba mi preset</p>
            <SliderFotos/>
            
        </div>
    );
};