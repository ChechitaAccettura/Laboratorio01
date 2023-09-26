'use client';
import { useRef, useState } from 'react';

export const Input = ({etiqueta, placeholder, clase, tipo}) => {
    
    
    const inputRef = useRef(null);
    
    const handleClick= () =>{
        inputRef.current.focus();
        Input.value = '';
    }
    
    return (
        <>
<fieldset class="mb-3 row">

<label class= {clase}>{etiqueta} </label>
<input class={clase} ref={inputRef} type= {tipo} placeholder= {placeholder} />

</fieldset>
        </>
    )

}