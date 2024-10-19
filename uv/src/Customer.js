import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './requests';

function Customer() {

    const [ite, setItems] = useState([]);
    // const [customer, SetCustomer] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(requests.images); // Replace with your Laravel API URL
                console.log(response)
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
          
          
                
                </div>
            
        ))}
    </ul>
</div>
  )
}

export default Customer;

