import React, { useState } from 'react';
import Hero from './Hero';


const Heros = () => {
  const [heroes] = useState([
    {
      // id:1,
      name: '  Unavilable by Davido',
     

     
      
    },
   
  ]);

  return (
    <div>
      {heroes.map((hero) => (
        <Hero
          // key={contact.id}
          name={hero.name}
          
        />
      ))}
    </div>
  );
};

export default Heros;
