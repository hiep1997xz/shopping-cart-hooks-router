import React from 'react'
import './Cart.css'

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) => {
  console.log(cartItems)
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )
  return (
    <div className="cart-item">
      <div className="cart-item-header">Cart Item</div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-car-button"
            onClick={() => handleClearCart()}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added</div>
      )}
      <div>
        {cartItems.map((item, index) => (
          <div className="cart-items-list" key={index}>
            <img src={item.image} alt="" className="cart-item-img" />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}>
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}>
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="cart-items-total-price-name">
        Total <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
  )
}

export default Cart
