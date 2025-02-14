import React from "react";

function ViewProduct({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}  - ${product.price}        
               <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />

              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewProduct;
