/* eslint-disable no-unused-vars */

import anime from "animejs";
import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

/* eslint-disable react/prop-types */
export default function VideoViwever({ruta,setViewer}){

    useEffect(()=>{
        anime({
            targets:".fadein",
            opacity:1,
            delay:100,
            duration:500,
            easing:"easeInOutQuad"
        })
    },[])

    return(
        <div className="fadein h-screen w-screen  fixed top-0 left-0 place-items-center  bg-amber-50/30 backdrop-blur-sm opacity-0"
        onClick={e=>setViewer(false)}
        >
            <button type="button" className="bg-white rounded-md p-2 text-gray-400 hover:border-b-black   absolute right-5 top-0 end-0 mt-14 z-20">X</button>
            <div className="rounded-b-sm  max-h-200 z-10"
            onClick={(e) => e.stopPropagation()}>
            <VideoPlayer src={ruta} />
            </div>
            
        </div>
    );
}