import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Customer() {

    const [ite, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/customers'); // Replace with your Laravel API URL
                setItems(response.data);
            } catch (error) {
                setError('Error fetching items');
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

  return (
    <div>
    <h1>Item List</h1>
    {error && <p>{error}</p>}
    <ul>
        {ite.map(it => (
            <div key={it.id}>
                <li>{it.name}</li>
                <li>{it.email}</li>
                <li>{it.phone}</li>
                </div>
            
        ))}
    </ul>
</div>
  )
}

export default Customer;

