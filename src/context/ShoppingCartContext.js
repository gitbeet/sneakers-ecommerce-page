import { createContext, useContext, useEffect } from "react";
import { useState } from 'react';
import { productData } from '../productData';

const context = createContext()
export function useShoppingCart(){
    const shoppingCartContext = useContext(context)
    if(!shoppingCartContext) throw new Error('There is no context')
    return shoppingCartContext
}

function ShoppingCartProvider({children}){

    const [product,setProduct] = useState(productData)
    const [shoppingCart,setShoppingCart] = useState([])
    const [checkout,setCheckout] = useState([])



    function addProduct(addedProduct){
        setShoppingCart(prev => {
            return prev.findIndex(prod => prod.name === addedProduct.name) === -1 
                                    ? [ ...prev , {...addedProduct , quantity : 1 } ]
                                    : prev.map( item =>{
                                        return item.name === addedProduct.name ? {...item , quantity : item.quantity + 1} : item})
        })
    }

    function removeProduct(productToRemove){
        setShoppingCart(prev => prev.map(product => {
            return product.name === productToRemove.name ? product.quantity > 0 
                                    ? {...product , quantity : product.quantity - 1} : {...product , quantity : 0} : product}
                                        )
                        )
    }

    function addToCart(productToAdd){
        if(shoppingCart.length === 0) return        
        setCheckout(prev => {
            // if(shoppingCart.find(prod => prod.name === productToAdd.name).quantity === 0){
            //     return prev.filter(product => product.name !== productToAdd.name)
            // }
            // else{
                return prev.findIndex(prod => prod.name === productToAdd.name) === -1
                            ? [...prev , {...productToAdd, quantity : shoppingCart.find(prod => prod.name === product.name).quantity}]
                            : prev.map( product => {
                                return  product.name === productToAdd.name 
                                      ? {...product ,
                                           quantity : product.quantity + shoppingCart.find(prod => prod.name === product.name).quantity}
                                      : product
    
                })  
            // }
        })    

    }

    function removeFromCart(productToRemove){
        setCheckout(prev => prev.filter(product => {
            return product.name !== productToRemove
        }))
    }


    return(
        <context.Provider value={{
                                product,
                                shoppingCart,
                                addProduct,
                                removeProduct,
                                addToCart,
                                removeFromCart,
                                checkout}}>
            {children}
        </context.Provider>
    )
}


export default ShoppingCartProvider