'use client';
import { Input } from '@/components/InputForm';
import { useRef, useState } from 'react';

export const Form = () =>{

    const inputRef = useRef(null);

    const handleClick= () =>{
        
        inputRef.current.focus();// esta parte no funciona -.-
        Input.value = '';
    
    }

    return (
        <>
        <div>
            <form action="">
                <Input ref={inputRef} etiqueta= 'Nombre' placeholder= 'ingrese su nombre' clase= 'form-control' tipo='text' />
                <Input  etiqueta= 'Cumpleaños' placeholder= 'Fecha de nacimiento' clase= 'form-control' tipo='date' />
                <Input  etiqueta= 'E-mail' placeholder= 'ingrese su mail' clase= 'form-control' tipo='mail' />
                <Input  etiqueta= 'Contraseña' placeholder= 'ingrese su clave' clase= 'form-control' tipo='password' />

                <button onClick={handleClick}> Enviar </button>

            </form>

        </div>
        </>
    );
}