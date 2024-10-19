import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateModel.css';

const endpoint = 'http://localhost:8000/api/createmodel';

const CreateModel = () => {
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
          <h3>Create Model</h3>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Model Name</label>
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
            <button type='submit' className='btn btn-primary'>Create Your Model</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModel;
