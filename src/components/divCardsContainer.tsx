'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { CardInterface } from '@/interfaces/componentsInterface';
import Card from './card';


async function fetchData() {
    const response = await fetch('https://dragonball-api.com/api/characters');
    return response.json();
}

export default function DivCardsContainer() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['cardsData'],
        queryFn: fetchData
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className='w-full h-full flex justify-around p-8 bg-cover bg-center' style={{ backgroundImage: "url('/dragonBalls.png')" }}>
            {data.items.map((character: any, index: number) => (
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
            ))
            }
        </div>
    )
}