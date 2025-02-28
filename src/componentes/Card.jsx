import { Link } from "react-router";

/* eslint-disable react/prop-types */
export default function Card({ruta,texto,enlace}){
    return(
        <div className="max-w-sm min-w-90 card rounded-2xl">
                <Link to={enlace} className="grid grid-cols-1 grid-rows-1 ">
                    <img className="rounded-2xl col-start-1 row-start-1 shadow-[4px_4px_11px_0px_rgba(0,_0,_0,_0.35)]" src={ruta} />
                    <p className="pirata rounded-2xl text-4xl textocard col-start-1 row-start-1 content-center self-center w-full h-full sombraTexto" style={{backgroundColor:"#DFDED440"}}>{texto}</p>
                </Link>
            </div>
    );
}