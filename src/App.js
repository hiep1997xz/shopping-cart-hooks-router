import { useState } from 'react'
import './App.css'
import data from './components/back/Data'
import Header from './components/front/header/Header'
import Router from './components/front/routes/Router'

function App() {
  const { productItems } = data
  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const productExis = cartItems.find((item) => item.id === product.id)
    if (productExis) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExis, quantity: productExis.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExis = cartItems.find((item) => item.id === product.id)
    if (productExis.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExis, quantity: productExis.quantity - 1 }
            : item
        )
      )
    }
  }

  const handleClearCart = () => {
    setCartItems([])
  } 

  return (
    <div>
      <Header />
      <Router
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleClearCart={handleClearCart}
      />
    </div>
  )
}

export default App
