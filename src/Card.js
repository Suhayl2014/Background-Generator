import React from 'react';

const Card = ({ name, email, id, }) => {
  return (
    <div>
      <img alt='robots' src={`https://robohash.org/${id}?bgset=bg1`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>This is Sparta</p>
      </div>
    </div>
  );
}

export default Card;

//We are in the card component which receives props as we sent it props in the App.js
//props are given the syntax name=value
//to reference the props we use props.name = props.email
//We have destructured which allows us to use it the way we have.
