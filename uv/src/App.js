import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

import Hero from './Hero';
import Row from './Row';
import Login from './Login';
import ItemList from './ItemList';
import CreateCar from './CreateCar';
import CarList from './CarList'; // Fixed the casing here
import CreatePost from './CreatePost';
import CreateModel from './CreateModel';
import ShowProducts from './ShowProducts';
import EditProduct from './EditProduct';
import Footer from './Footer';
import About from './About';
import Service from './Service';
import Reservedit from './Reservedit';
import Reserved from './ItemList';
import ShowProduct from './ShowProduct';
import Register from './Register';





function App() {


  return (
    <Router>
            <auth />
    <Header/>
      <div className="app"> {/* Wrap with div for styling */}
        <Routes>
          <Route path="/" element={
            <>
          
              <Hero />
   
              <ItemList/>

              
              
            </>
          } />
           <Route path="/showproduct" element={<ShowProduct />} />
           <Route path="/reserve" element={<Reserved />} />
           <Route path="/editproduct/:id" element={<Reservedit />} />
           
        
          <Route path="/mycar" element={
            <>
          
              
          <ShowProducts/>
              
              
            </>
          } />
          <Route path='/edit/:id' element={
            <>
          
              
          <EditProduct/>
              
              
            </>
          } />
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />
          <Route path="/createcar" element={
            <>
           
              <CreateCar />
            </>
          } />
          <Route path="/createpost" element={
            <>
              
              <CreatePost />
              <Row title="Trending Now" />
            </>
          } />
          <Route path="/createmodel" element={
            <>
              
              <CreateModel />
              
            </>
          } />
          <Route path="/carlist" element={
            <>
     
              <CarList />
            </>
          } />
          <Route path="/service" element={
            <>
              
              <Service />
            </>
          } />
          <Route path="/about" element={
            <>
              
              
              <About />
            </>
          } />
          <Route path="/register" element={
            <>

              <Register />
            </>
          } />
        </Routes>
     
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
