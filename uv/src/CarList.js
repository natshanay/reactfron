import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './requests'; // Make sure this is the correct path

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCarsAndImages = async () => {
      try {
        // Fetch cars and images concurrently
        const [carsResponse, imagesResponse] = await Promise.all([
          axios.get(requests.cars),
          
        ]);

        // Set state with fetched data
        setCars(carsResponse.data);
        setImages(imagesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCarsAndImages();
  }, []);

  // Create a mapping of image data by car ID
  const imageMap = images.reduce((acc, image) => {
    if (image.car_id && image.images) {
    
      acc[image.car_id] = image.url;
    }
    return acc;
  }, {});

  
  console.log('Image Map:', imageMap);
  console.log('Cars:', cars);

  return (
    <div>
      <h1> Availble Car Names </h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <ol>{car.name}</ol>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
