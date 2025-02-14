import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import UpdateProduct from "./UpdateProduct";
import Cart from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [products, setProducts] = useState([{id:1,name:'kurtis',price:999,image:"https://i.pinimg.com/originals/bd/cb/6c/bdcb6c84a0c2a0040f3aadd9c482e916.jpg"},
  ]);
  const [cart, setCart] = useState([]);

  // Add product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Update product
  const updateProduct = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Product Management</h1>
      
      {/* AddProduct component */}
      <AddProduct addProduct={addProduct} />
      
      {/* ViewProduct component */}
      <ViewProduct products={products} addToCart={addToCart} />
      
      
      {/* Cart component */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
