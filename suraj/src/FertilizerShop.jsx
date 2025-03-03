import React, { useState, useEffect } from "react";
import axios from "axios";
import './FertilizerShop.css';

const FertilizerShop = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/fertilizer");
        setShops(response.data);
      } catch (err) {
        if (err.response) {
          setError(`Server Error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError("Network Error: Could not reach the server. Please check your connection.");
        } else {
          setError(`Unexpected Error: ${err.message}`);
        }
        console.error("❌ Fetch Error:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchShops();
  }, []);

  return (
    <div>
      <h2>Fertilizer Shop Details</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : shops.length > 0 ? (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Owner Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop._id}>
                <td>{shop.shopname || "N/A"}</td>
                <td>{shop.ownername || "N/A"}</td>
                <td>{shop.address || "N/A"}</td>
                <td>{shop.contactnumber || "N/A"}</td>
                <td>{shop.email || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No fertilizer shops found.</p>
      )}
    </div>
  );
};

export default FertilizerShop;
