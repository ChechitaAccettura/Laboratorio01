'use client'
import { useRef, useState } from 'react';

export const Video = () =>{

    const videoRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);

    const handleClicVideo = () =>{
        const play = !isPlay;
                if (play) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }

    }

    return (
        <> 

<video ref= {videoRef} 
        onPlay={()=>{setIsPlay(true)}}
        onPause={()=>{setIsPlay(false)}}
        >
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        </source>
</video>

<button onClick={handleClicVideo} > {isPlay ? 'Stop' : 'Play'} </button>
    </>
    );
}

