'use client';
import 'bootstrap';
import '@/app/globals.css'
import { Component } from "react";


export default class Parrafo1 extends Component {

    state = {
        counter: 0
    }
    HandleIncrease = () => {
        this.setState ({
            counter: this.state.counter + 1
        });
    }
    HandleDecrease = () => {
        this.setState ({
            counter: this.state.counter - 1
        })
    }

    render () {
        return(<>

            <p class="lead" > Hola Mi nombre es ... {this.props.name} </p>
            <p> Y mis puntos en esta partida son : {this.state.counter} </p>
            <button onClick={this.HandleIncrease}> Subir puntos </button>
            <button onClick={this.HandleDecrease}> Bajar puntos </button>
        
        <div>
            {this.props.children} 
        </div>

            </>);
    }
};
