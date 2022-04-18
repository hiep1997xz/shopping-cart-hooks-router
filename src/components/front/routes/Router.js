import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../cart/Cart'
import Products from '../products/Products'
import SignUp from '../signup/SignUp'

const Router = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/cart">
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleClearCart={handleClearCart}
          />
        </Route>
      </Switch>
    </>
  )
}

export default Router
