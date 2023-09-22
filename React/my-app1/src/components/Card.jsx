'use client';
import { Component } from "react";


export default class Card extends Component {
    render() {
        return(
            <> 
            <div class="card p-2 m-2">
                <img src="https://picsum.photos/id/16/367/267" class="card-img-top" alt="nature1"/> 
                <div class="card-body">
                    <h5 class="card-title">Vida natural</h5>
                    <p class="card-text">Explorá lugares asombrosos, disfrutá del descanso, conectate con la naturaleza.</p>
                    <a href="#" type="buton" class="btn btn-primary">Saber más</a>
                    
                </div>
            </div>

            </>
        )
    } 
}