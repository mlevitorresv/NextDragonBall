import { TitleInterface } from '@/interfaces/componentsInterface'
import React from 'react'

export default function Title(props: TitleInterface) {
  return (
    <h1 className='text-lg font-kaushan'>
      {props.text}
    </h1>
  )
}
