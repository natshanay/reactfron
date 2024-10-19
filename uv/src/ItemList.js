import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemList.css';

function ItemList() {
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [images, setImages] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carsRes, modelsRes, imagesRes, reservationsRes] = await Promise.all([
          axios.get('http://localhost:8000/api/cars'),
          axios.get('http://localhost:8000/api/models'),
          axios.get('http://localhost:8000/api/images'),
          axios.get('http://localhost:8000/api/reservations') // Fetch reservation data
        ]);

        setCars(carsRes.data);
        setModels(modelsRes.data);
        setImages(imagesRes.data);
        setReservations(reservationsRes.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = async (car) => {
    try {
      const carModel = models.find(model => model.id === car.model_id);
      const carImages = images.find(image => image.car_id === car.id);
      const reservation = reservations.find(res => res.car_id === car.id);

      const payload = {
        car_name: car.name,
        model_name: carModel ? carModel.name : 'Unknown',
        image: carImages ? carImages.images : 'default-image-url.jpg',
        amount_per_day: reservation ? reservation.amount : 0
      };

      await axios.post('http://localhost:8000/api/addtocart', payload);
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error.response ? error.response.data : error.message);
      alert('Error adding product to cart');
    }
  };

  return (
    <div className="container item-list-top-margin">
      <div className="row">
        {cars.map(car => {
          const carModel = models.find(model => model.id === car.model_id);
          const carImages = images.find(image => image.car_id === car.id);
          const reservation = reservations.find(res => res.car_id === car.id);

          return (
            <div key={car.id} className="col-md-3">
              <div className="product">
                {carImages ? (
                  <img 
                    src={`http://localhost:8000/images/${carImages.images}`} 
                    alt={car.name} 
                  />
                ) : (
                  <img 
                    src="default-image-url.jpg" 
                    alt="Default" 
                  />
                )}
                <div className="product__info">
                  <p><strong>{car.name}</strong></p>
                  <p><em>{carModel ? carModel.name : 'Unknown'}</em></p>
                  {reservation && (
                    <>
                      <strong className='price'>
                        <p><em>${reservation.amount}/day</em></p>
                      </strong>
                    </>
                  )}
                  <div className="product__rating">
                    {Array(car.rating).fill().map((_, i) => (
                      <p key={i}>🌟</p>
                    ))}
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary mt-2"
                  onClick={() => handleAddToCart(car)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
