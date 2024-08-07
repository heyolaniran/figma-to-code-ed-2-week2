import { categoryType, FooterLinksType, linksType, productType } from "@/types";

export const leftLinks : linksType[] = [
    { 
        id: 1,
        name : 'Men',
        href: ''
    }, 
    {
        id: 2,
        name: 'Women', 
        href: ''
    }, 
    {
        id: 3,
        name: 'Kids', 
        href: ''
    }, 
    {
        id: 4,
        name: 'Collections', 
        href: ''
    }
] ; 


export const rightLinks :  linksType[] = [

    {
        id: 1,
        name: 'Shop', 
        href: '/products'
    }, 
    {
        id: 2, 
        name: 'About Us', 
        href: ''
    },
    {
        id: 2,
        name: 'Account', 
        href: ''
    },
    {
        id: 3,
        name: 'Cart', 
        href: '/cart'
    }
]

export const categories : categoryType[]  = [
    {
        id: 1 , 
        name: "All",
        total: 132
    }, 
    {
        id: 2 , 
        name: "Accessories",
        total: 13
    }, 
    {
        id: 3 , 
        name: "Featured",
        total: 67
    }, 
    {
        id: 4 , 
        name: "Unisex",
        total: 52
    }, 
]; 

export const products : productType[] = [
    {
        id : 1 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: true, 
        category : 1
    }, 
    {
        id : 2 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: true, 
        category : 1
    }, 
    {
        id : 3 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
    {
        id : 4 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
    {
        id : 5 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: true, 
        category : 1
    }, 
    {
        id : 6 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
]; 

export const FooterLinks:  FooterLinksType[] = [
    {
        id: 1, 
        name: 'Product',
        links: [
            {
                id: 1, 
                name: 'Jacket',
                href:  ''
            }, 
            {
                id: 2, 
                name: 'T-Shirt',
                href:  ''
            }, 
            {
                id: 3, 
                name: 'Shoes',
                href:  ''
            }, 
            {
                id: 4, 
                name: 'Sunglasses',
                href:  ''
            }
        ]
    }, 
    {
        id: 2, 
        name: 'Categories',
        links: [
            {
                id: 1, 
                name: 'Man',
                href:  ''
            }, 
            {
                id: 2, 
                name: 'Woman',
                href:  ''
            }, 
            {
                id: 3, 
                name: 'Kids',
                href:  ''
            }, 
            {
                id: 4, 
                name: 'Gift',
                href:  ''
            },
            {
                id: 5, 
                name: 'New Arrival',
                href:  ''
            }
        ]
    },
    {
        id: 3, 
        name: 'Our Social Media',
        links: [
            {
                id: 1, 
                name: 'Instagram',
                href:  ''
            }, 
            {
                id: 2, 
                name: 'Facebook',
                href:  ''
            }, 
            {
                id: 3, 
                name: 'Youtube',
                href:  ''
            }, 
            {
                id: 4, 
                name: 'X',
                href:  ''
            },
          
        ]
    } 
    
]; 

