import React from "react";

export interface CardProps {
  id : number;
  name: number;
  email: boolean;
}

// Displays generated kitty
const Card : React.FC<CardProps>  = ({id, name, email}) => {
  return (
    <div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
