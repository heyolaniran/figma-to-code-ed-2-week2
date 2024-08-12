import { products } from "@/constants";
import { CartProductProps, ProductCollectionProps, ProductDetailProps } from "@/types";


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


export const getCartProducts = async () => {

    const body = {
        query: `mutation CartCreate {
          cartCreate(
            input: {
              lines: [
                {
                  quantity: 3
                  merchandiseId: "gid://shopify/ProductVariant/43695848128534"
                }
                
                

              ]
            }
          ) {
            cart {
              id
              createdAt
              updatedAt
              lines(first: 10) {
                edges {
                  node {
                    id
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        image {
                          id
                          url
                        }
                      }
                    }
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }`
      };
      const request = await fetch('https://mock.shop/api', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json"
        },
      });
      
      const response = await request.json();

      const cart = response.data.cartCreate.cart; 


      const products = cart.lines.edges; 
     
      const cartProducts : CartProductProps[] = [] ; 

      products.map((item : any) => {
        
        cartProducts.push({
            id: item.node.id, 
            name: item.node.title, 
            color: '', 
            size: '',
            picture: item.node.merchandise.image.url, 
            amount: 0,
            currency: ""
            
        })

      })
      

      const subtotalAmount = cart.cost.subtotalAmount

      const totalAmount =  cart.cost.totalAmount
     
      
      return {cartProducts ,  subtotalAmount , totalAmount}


}

export const getCollectionProducts = async (items : number) => {

    const url = `https://mock.shop/api?query=%7B%20products(first%3A%20${items})%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D`; 

   const products = await fetcher(url) ; 

   const collection : ProductCollectionProps[] = []

   products.products.edges.map((product : any , index : number) => {
        
        collection.push({
            id: product.node.id, 
            picture: product.node.featuredImage.url, 
            name: product.node.title, 
            price: product.node.variants.edges[0].node.price.amount as number, 
            currency: product.node.variants.edges[0].node.price.currencyCode
        })

   })

   return collection ; 
}