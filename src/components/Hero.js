import { Button } from 'bootstrap';
import React, { useState } from 'react';

const Hero = ({ name, email, phone }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className='hero-left-2'>
        <h1>Make your party fun!</h1>
        <p>Create your custom playlist today</p>
        <button className="button " onClick={() => setCounter(counter + 1)}>
          Create Playlist
        </button>
        </div>
      </div>
      <div className="hero-right bg-dark  d-flex  justify-content-center">
        <ul className="list-group  mt-2 w-70 h-55 d-flex justify-content-center p-4 border border-primary ">
          <h1 className='text-danger'>Trending songs</h1>
          <li className="list-group-item d-flex mb-3 align-items-center justify-content-center"> {name}  <i class="fa-solid fa-plus"></i></li>
          <li className="list-group-item d-flex mb-3 align-items-center justify-content-center">{name}  <i class="fa-solid fa-plus"></i></li> 
          <li className="list-group-item d-flex mb-3 align-items-center justify-content-center">{name}  <i class="fa-solid fa-plus"></i></li> 
          <li className="list-group-item d-flex mb-3 align-items-center justify-content-center">{name}  <i class="fa-solid fa-plus"></i></li>  
          <li className="list-group-item d-flex mb-3 align-items-center justify-content-center">{name}  <i class="fa-solid fa-plus"></i></li> 
          <button className="button " onClick={() => setCounter(counter + 1)}>
          veiw more
        </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Hero;
