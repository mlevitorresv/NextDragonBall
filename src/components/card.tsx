import { CardInterface } from '@/interfaces/componentsInterface';
import React from 'react'

export default function Card(props: CardInterface) {
    return (
        <div className="relative group w-64 h-80">
            {/* Imagen de fondo */}
            <div
                className="w-full h-full bg-cover rounded-lg"
                style={{ backgroundImage: `url(${props.image})` }}
            ></div>

            {/* Capa de información que aparece al hacer hover */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
                <p>Name: {props.name}</p>
                <p>Race: {props.race}</p>
                <p>Gender: {props.gender}</p>
                <p>Ki: {props.ki}</p>
                <p>Max. Ki: {props.maxKi}</p>
                <p>Affiliation: {props.affiliation}</p>
            </div>
        </div>
    );
}
