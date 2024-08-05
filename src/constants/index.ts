import { categoryType, linksType, productType } from "@/types";

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
        href: 'About Us'
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
        promo: false, 
        category : 1
    }, 
    {
        id : 1 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
    {
        id : 1 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
    {
        id : 1 ,
        name: "SUMMER SHIRT", 
        price: 99,
        promo: false, 
        category : 1
    }, 
]