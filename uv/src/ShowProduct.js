import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowProduct.css'; // Ensure you have this CSS file

const endpoint = 'http://localhost:8000/api';

const ShowProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${endpoint}/products`); // Ensure this matches your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${endpoint}/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container show-products-top-margin">
      <div className='d-grid gap-2'>
        <Link to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Back Home</Link>
      </div>

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Car Name</th>
            <th>Model Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.car_name}</td>
              <td>{product.model_name}</td>
              <td><img src={`http://localhost:8000/images/${product.image}`} alt={product.car_name} className="product-image" /></td>
              <td>
              
                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
