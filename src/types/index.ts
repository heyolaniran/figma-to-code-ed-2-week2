
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