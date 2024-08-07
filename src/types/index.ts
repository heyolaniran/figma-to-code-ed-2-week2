
export type linksType = {
    id: number
    name: string
    href: string
}


export type categoryType = {
    id: number 
    name: string
    total: number
}

export type productType = {
    id: number
    name: string
    price: number
    promo: boolean
    category: number
}

export type FooterLinksType = {
    id: number
    name : string
    links: fLinks[]
}

type fLinks = {
    id: number
    name: string 
    href : string
}

export type coloreProps = {
    id: number
    color : string
}

export type sizeProps = {
    id: number
    name: string
}