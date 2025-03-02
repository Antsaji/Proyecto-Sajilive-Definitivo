/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX} from "lucide-react";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === "0");
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume;
    } else {
      videoRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-lg ">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded fotovertical h-screen z-30 pt-15 pb-1"
        onTimeUpdate={handleProgress}
      />
      <div className="absolute bottom-0 left-0 right-0  bg-opacity-75 p-3 flex items-center gap-4">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-blue-500 rounded-full text-white"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full cursor-pointer"
        />
        <button onClick={toggleMute} className="p-2 bg-gray-500 rounded-full text-white">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 cursor-pointer"
        />
        
      </div>
    </div>
  );
}

