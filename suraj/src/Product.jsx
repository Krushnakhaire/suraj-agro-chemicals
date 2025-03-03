import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/v1/product");
        setProducts(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Server Error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError("Network Error: Could not reach the server. Please check your connection.");
        } else {
          setError(`Unexpected Error: ${err.message}`);
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : products.length > 0 ? (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price per Unit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.product_name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.priceperunit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Product;
