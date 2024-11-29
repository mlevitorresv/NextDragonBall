

export interface TitleInterface{
    text: string
}

export interface CardInterface{
    image: string,
    name: string,
    race: string,
    gender: string,
    ki: string,
    maxKi: string,
    affiliation: string
}

export interface ParagraphAvgInterface{
    texts?: string[],
    children?: React.ReactNode
}