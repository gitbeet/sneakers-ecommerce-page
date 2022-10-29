import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../css/shoppingCartWindow.css'
import ShoppingCartWindowProduct from './ShoppingCartWindowProduct'

function ShoppingCartWindow({showShoppingCartWindow , toggleShoppingCartWindow}) {

  const {checkout} = useShoppingCart()

  return (
    <>
    <div onClick={toggleShoppingCartWindow} className={`shopping-cart-window-backdrop ${showShoppingCartWindow ? '' : 'hide'}`}></div>
    <div className={`shopping-cart-window ${showShoppingCartWindow ? '' : 'hide'}`}>
      <h2 className='shopping-cart-window-header'>Cart</h2>
      <div className='shopping-cart-window-body'>
      {checkout.length > 0 && checkout.map(product => <ShoppingCartWindowProduct
                                                            key={product.name}
                                                            product={product} />)}
      
      {checkout.length > 0 && <button>Checkout</button> }
      </div>
      {checkout.length ===0 && <p className='empty-cart-message'>Your cart is empty.</p>}
    </div>
    </>
  )
}

export default ShoppingCartWindow
