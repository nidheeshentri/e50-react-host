import React, { useState } from 'react'
import Header from './Header'
import { addToCart, clearCart } from './features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.value)
    const addToCartOnClick = () => {
        console.log("Working")
        dispatch(addToCart("Mouse"))
    }
  return (
    <div>
        <h1>Cart list</h1>
        {cartItems.map((product, index)=>{
            return <h1>{product}</h1>
        })}
        <button onClick = {addToCartOnClick}>Addt to cart</button>
        <button onClick = {()=>dispatch(clearCart())}>Clear cart</button>
    </div>
  )
}

export default Cart