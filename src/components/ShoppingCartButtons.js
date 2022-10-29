import React from 'react'
import '../css/shoppingCartButtons.css'
import buttonMinus from '../images/icon-minus.svg'
import buttonPlus from '../images/icon-plus.svg'
import ShoppingCartIcon from '../images/icon-cart.svg'
import { useShoppingCart } from '../context/ShoppingCartContext'


function ShoppingCartButtons() {

  const {product,shoppingCart,addProduct,removeProduct,addToCart} = useShoppingCart()


  return (
    <div className='shopping-cart-buttons'>
      <div className="shopping-cart-quantity-buttons">
          
          <div 
                className='shopping-cart-quantity-button' 
                onClick={() => removeProduct(product)} >
            <img 
                src={buttonMinus} 
                alt='shopping cart button' />
          </div>
          <div className='shopping-cart-quantity-number'>{shoppingCart[0]?.quantity || 0}</div>
         
          <div 
                className='shopping-cart-quantity-button' 
                onClick={() => addProduct(product)} >
            <img 
                src={buttonPlus} 
                alt='shopping cart button' />
          </div>
      </div>
      <button className='add-to-cart-button'  onClick={() => addToCart(product)} >
        <img className='shopping-cart-icon' src={ShoppingCartIcon} alt='shopping cart icon'/>
        Add to cart
      </button>

    </div>
  )
}

export default ShoppingCartButtons
