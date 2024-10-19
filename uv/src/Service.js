import React from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Service One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      icon: 'service-icon-1.png', // Example icon image
    },
    {
      id: 2,
      title: 'Service Two',
      description: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
      icon: 'service-icon-2.png', // Example icon image
    },
    {
      id: 3,
      title: 'Service Three',
      description: 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.',
      icon: 'service-icon-3.png', // Example icon image
    },
    // Add more services as needed
  ];

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
