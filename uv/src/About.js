import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to MySite! We are dedicated to providing top-notch services and products to our customers. Our mission is to deliver exceptional value and create lasting relationships with our clients.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2024, MySite began with a simple idea: to revolutionize the way people interact with technology. Over the years, we’ve grown from a small startup to a leading player in our industry, thanks to the support of our amazing team and loyal customers.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We strive to be at the forefront of technology and trends.</li>
          <li><strong>Customer Focus:</strong> Our customers are our top priority. We aim to exceed their expectations.</li>
          <li><strong>Integrity:</strong> We operate with transparency and honesty in all our dealings.</li>
        </ul>
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member-1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="team-member-2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
