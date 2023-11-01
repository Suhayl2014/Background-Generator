import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((robot) => {
          return (
            <Card
            key={robot.id} // Use a unique identifier as the key
            id={robot.id}
            name={robot.name}
            email={robot.email}
              />
          ); 
        })
      }
    </div>
  );
}

export default CardList;