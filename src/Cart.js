import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
