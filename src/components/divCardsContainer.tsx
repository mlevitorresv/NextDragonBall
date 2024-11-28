'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { CardInterface } from '@/interfaces/componentsInterface';
import Card from './card';
import characters from '@/app/characters/page';


async function fetchData() {
    const response = await fetch('https://dragonball-api.com/api/characters?limit=100');
    return response.json();
}

export default function DivCardsContainer() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['cardsData'],
        queryFn: fetchData
    });

    console.log('Data:', data); // Aquí puedes inspeccionar la respuesta de la API

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className='w-full h-full flex flex-wrap justify-around p-8'>
            {data.items.map((character: any, index: number) => {

                let imageUrl = character.image
                if(!imageUrl.includes(' ')){
                    return (
                        <Card
                            key={index}
                            image={character.image}
                            name={character.name}
                            race={character.race}
                            gender={character.gender}
                            ki={character.ki}
                            maxKi={character.maxKi}
                            affiliation={character.affiliation}
                        />
                    )
                }
            })
            }
        </div>
    )
}