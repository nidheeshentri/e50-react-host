import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: ["Laptop", "Keyboad"]
  },
  reducers: {
    clearCart: state => {
        state.value = []
    },
    addToCart: (state, action) => {
        console.log(action)
      state.value.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { clearCart, addToCart } = cartSlice.actions

export default cartSlice.reducer