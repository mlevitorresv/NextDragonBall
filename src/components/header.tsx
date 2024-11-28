import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full flex justify-around bg-black text-white p-8'>
        <Link href={'https://web.dragonball-api.com/'}><Title text='DRAGON BALL' /></Link>
        <Link href={'/characters'}><Title text='Personajes' /></Link>
        <Link href={'https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente/'}><Title text='MLEVITORRESV' /></Link>
    </header>
  )
}
