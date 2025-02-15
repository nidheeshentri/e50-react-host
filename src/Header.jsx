import React from 'react'
import { useSelector } from 'react-redux'


function Header(props) {
    const cart = useSelector(state => state.cart.value)
  return (
    <div>Cart ({cart.length})</div>
  )
}

export default Header