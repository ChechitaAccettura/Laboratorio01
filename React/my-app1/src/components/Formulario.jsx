'use client';
import { useRef, useState } from 'react';

export const Form = () =>{

    const inputRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);
   
    const handleClick= () =>{
        inputRef.current.focus();
        input1.value = '';
    }

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
        <div>
            <form  class="form" action="">
            <fieldset class="mb-3 row">
                <legend> Datos personales  </legend>
                <label class= "form-control">Nombre </label>
                <input class="form-control"  id="input1" ref={inputRef} type='text'/>

                <label class= "form-control">Cumpleaños</label>
                <input class= "form-control" type="date"></input>

                <input  class= "form-control"  type="email" required placeholder="Correo electrónico"></input>
                <label  class= "form-control" > Contraseña </label>
                <input type="password" />
            </fieldset>

            <button onClick={handleClick}> Enviar </button>
            </form>
<br></br>

<button onClick={handleClicVideo} > {isPlay ? 'Stop' : 'Play'} </button>
<video ref= {videoRef} 
        onPlay={()=>{setIsPlay(true)}}
        onPause={()=>{setIsPlay(false)}}
        >
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        </source>
</video>
        </div>
        </>
    );
}