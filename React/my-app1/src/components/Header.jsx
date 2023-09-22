'use client';
import { Component } from "react";
import Link from 'next/link';

export default class Header extends Component {
    render () {
        return(

        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand link" href='/' target="_blank" > Home </Link>
                <Link class="navbar-brand link" href= '/contactos' target="_blank" > Contacto </Link>
                <Link class="navbar-brand link" href= '/aboutus' target="_blank" > Sobre Nosotros </Link>

            </div>
        </nav>

        
            );
    }
};
