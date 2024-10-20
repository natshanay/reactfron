import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/createpost/';

const EditProduct = () => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${id}`, {
                description: description,
                price: price,
                stock: stock
            });
            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                setDescription(response.data.description);
                setPrice(response.data.price);
                setStock(response.data.stock);
            } catch (error) {
                console.error('Error fetching product:', error.response ? error.response.data : error.message);
            }
        };

        if (id) {
            getProductById();
        }
    }, [id]);

    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={update}>
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
                        onChange={(e) => setPrice(Number(e.target.value))}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input 
                        value={stock}
                        onChange={(e) => setStock(Number(e.target.value))}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    );
};

export default EditProduct;
