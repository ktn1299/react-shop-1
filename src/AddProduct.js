import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name,
      image,
      price: parseFloat(price),
    };
    addProduct(newProduct);
    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
         <input
        type="text"
        placeholder="Product image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
