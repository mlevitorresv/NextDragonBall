import React from 'react'
import Title from '@/components/title'

export default function Header() {
  return (
    <header className='w-full flex justify-around bg-black text-white p-8'>
        <Title text='DRAGON BALL' />
        <Title text='Personajes' />
        <Title text='Planetas' />
        <Title text='MLEVITORRESV' />
    </header>
  )
}
