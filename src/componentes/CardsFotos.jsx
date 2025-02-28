import Card from "./Card";

export default function CardsFotos(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-10">
            <div className="col-start-1 lg:col-start-1 transform transition duration-500 hover:scale-105 flex">
            <Card ruta="/fotosCardFotos/dia.jpg" texto="Dia" enlace="/foto/estilo/dia"/>
            </div>
            <div className="col-start-1 md:col-start-2 lg:col-start-2 transform transition duration-500 hover:scale-105 flex">
            <Card ruta="/fotosCardFotos/noche.jpg" texto="Noche" enlace="/foto/estilo/noche"/>
            </div>
            <div className="col-start-1 md:col-start-1 lg:col-start-3 transform transition duration-500 hover:scale-105 flex">
            <Card ruta="/fotosCardFotos/producto.jpg" texto="Producto" enlace="/foto/estilo/producto"/>
            </div>
            <div className="col-start-1 md:col-start-2 lg:col-start-1 transform transition duration-500 hover:scale-105 flex">
            <Card ruta="/fotosCardFotos/semanaSanta.jpg" texto="Semana Santa" enlace="/foto/estilo/ss"/>
            </div>
            <div className="col-start-1 md:col-start-1 lg:col-start-2 transform transition duration-500 hover:scale-105 flex">
            <Card ruta="/fotosCardFotos/feria.jpg" texto="Feria" enlace="/foto/estilo/feria"/>
            </div>
        </div>
    );
}