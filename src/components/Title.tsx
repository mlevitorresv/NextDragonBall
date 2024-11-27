import { TitleInterface } from '@/interfaces/componentsInterface'
import React from 'react'

export default function Title(props: TitleInterface) {
  return (
    <h1 className='text-lg'>
      {props.text}
    </h1>
  )
}
