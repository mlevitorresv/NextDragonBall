import { ParagraphAvgInterface } from '@/interfaces/componentsInterface'
import React from 'react'

export default function ParagraphAvg(props: ParagraphAvgInterface) {
  return (
    props.texts.map((text, index) => (
        <p className='text-black w-3/5 mx-auto my-8' key={index}>
            {text}
        </p>
    )
    )
    
  )
}
