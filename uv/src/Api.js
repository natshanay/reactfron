import React from "react";
import axios from 'axios';

function Api() {
  // Create an instance of axios with default configurations
  const http = axios.create({
    baseURL: 'http://localhost:8000/api/', // Base URL for API requests
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
  });

  // Return the http instance so it can be used in other parts of the application
  return {
    http
  } 
}

export default Api;