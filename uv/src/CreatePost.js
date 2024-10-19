import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const endpoint = 'http://localhost:8000/api/createpost';

const CreatePost = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, { description, price, stock });
      navigate('/'); // Navigate to the home page after successful submission
    } catch (error) {
      console.error('There was an error storing the product:', error);
    }
  };

  return (
    <div>
      <div className="full-height">
        <div className="form-container">
          <h3>Create Product</h3>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Price</label>
              <input 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type='number'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type='number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
