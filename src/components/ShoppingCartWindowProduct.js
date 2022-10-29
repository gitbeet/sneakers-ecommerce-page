import React from 'react'
import {formatCurrency} from '../utilities/formatCurrency'
import iconDelete from '../images/icon-delete.svg'
import '../css/shoppingCartWindowProduct.css'
import { useShoppingCart } from '../context/ShoppingCartContext'

function ShoppingCartWindowProduct({product}) {

  const {removeFromCart} = useShoppingCart()

  const {name,price,images,quantity,discount} = product

  return (
    <div className='shopping-cart-window-product'>
      <div className='shopping-cart-window-product-left'>
        <img className='shopping-cart-window-product-image' src={images.thumbnail[0]} alt='img' />
        <div class="shopping-cart-window-product-text">
          <span className='shopping-cart-window-product-name'>{name}</span>
          <div className="shopping-cart-window-product-prices">
            <span>{formatCurrency(price)}</span>
            <span>x{quantity}</span>
            <span className='shopping-cart-window-product-total'>{formatCurrency(price*quantity*discount/100)}</span>
          </div>
        </div>
      </div>
      <img className='shopping-cart-product-window-delete-icon' onClick={() => removeFromCart(name)} src={iconDelete} alt='delete icon' />
    </div>
  )
}

export default ShoppingCartWindowProduct
