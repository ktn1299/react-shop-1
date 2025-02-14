import React, { useState } from "react";

function UpdateProduct({ products, updateProduct }) {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");

  const [newPrice, setNewPrice] = useState("");

  const handleUpdateProduct = () => {
    const updatedProduct = {
      id: selectedProductId,
      name: newName,
      image:newImage,
      price: parseFloat(newPrice),
    };
    updateProduct(selectedProductId, updatedProduct);
    setSelectedProductId("");
    setNewName("");
    setNewImage("");
    setNewPrice("");
  };

  return (
    <div>
      <h2>Update Product</h2>
      <select
        value={selectedProductId}
        onChange={(e) => setSelectedProductId(e.target.value)}
      >
        <option value="">Select Product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      {selectedProductId && (
        <div>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="New image"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="New Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button onClick={handleUpdateProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
}

export default UpdateProduct;
