
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

export type InputProps = {
    label : string
    placeholder: string
    type: string
}

export type ShoppingPaymentMethodProps = {
    icon: string
    name: string
}

export type ShoppingMethodProps = {
    name : string
    description: string, 
    price: number
}

export type CartProductProps = {
    id: string
    name: string
    color: string
    size: string
    picture: string
    amount: number
    currency: string
}

export type ProductCollectionProps = {
    id: string
    picture: string
    name: string
    price: number
    currency: string
}

export  type ProductDetailProps = {
    id : string
    picture : string
    title : string
    description: string
    color: string 
    variant: ProductVariantProps[]
    
}

export type CheckoutProductProps =  ProductCollectionProps 

type ProductVariantProps = {
    id: string
    title: string
    picture: string
    price: number
    currency: string
}