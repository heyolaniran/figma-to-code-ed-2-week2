import { products } from "@/constants";
import { ProductCollectionProps, ProductDetailProps } from "@/types";


export const fetcher = async  (url : string) => {
    
    const request = await fetch(url)
    const response = await request.json();
    
    const product = response.data ; 

    return product ; 
}

export const getProductWithVariants = async () => {

    const data = await fetcher('') ; 

    const product : ProductDetailProps = {
        id: '', 
        picture: '', 
        title: '',
        description: '', 
        color: '', 
        variant : [
            {
                id : '',
                title: '', 
                picture: '', 
                price: 0, 
                currency: ''
            }
        ]
    }

    return product;

}


export const getCollectionProduct = async (items : number) => {

    const url = ``; 

   const products = await fetcher(url) ; 

   const collection : ProductCollectionProps[] = []

   products.products.edges.map((product : any , index : number) => {
        
        collection.push({
            id: '', 
            picture: '', 
            name: '', 
            price: 0, 
            currency: ''
        })

   })


   return collection ; 
}