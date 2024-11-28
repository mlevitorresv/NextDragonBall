import { ParagraphAvgInterface } from '@/interfaces/componentsInterface'
import React, { Children } from 'react'

export default function ParagraphAvg(props: ParagraphAvgInterface) {
    if (props.texts) {
        return (
            props.texts.map((text, index) => (
                <p className='text-black text-lg w-3/5 mx-auto my-8' key={index}>
                    {text}
                </p>
            ))
        )
    }
    return (
        <p className='text-black text-lg w-3/5 mx-auto my-8'>
            {props.children}
        </p>
    )
}
