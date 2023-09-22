'use client';
import { Component } from "react";

export default class Hero extends Component {
    render () {
        return (
            <div class="hero p-3">
                <div class="row">
                    <h1 class="col-6">
                        Titulo de esta sección
                    </h1>
                    <div class="col-6 lead">
                        Aca dice algo que tiene que ver con el contenido de esta página y que nos va a encantar leerlo.
                    </div>
                </div>

                <div class="row">
                    <div class="col-8">
                        <p>Aca hay otro texto con otro formato que dice algo que tiene que ver con lo que está en la foti,,,, que biniiiiiita!</p>
                    </div>
                    <div class="col-4">
                        <img src="https://picsum.photos/536/354" alt="image1" id="img1"/>
                    </div>
                </div>

            </div>
        )
    }
}