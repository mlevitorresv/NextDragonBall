import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full flex items-center justify-around bg-black text-white p-8'>
        <Link href={'https://web.dragonball-api.com/'}><Image src='/dragon-balls.webp' alt='logo api dragon ball' className='w-16'/></Link>
        <Link href={'/characters'}><Title text='Personajes' /></Link>
        <Link href={'https://www.linkedin.com/in/manuel-lev%C3%AD-torres-vicente/'}><Title text='MLEVITORRESV' /></Link>
    </header>
  )
}
