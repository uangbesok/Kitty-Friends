import React from "react";
import Card from "./Card";
// import { robots } from "./robots";

const CardList = ({ robots }) => {
  return (
    <div>{
        robots.map(user => {
        return (
            <Card key={user.id} id={user.phone} name={user.name} email={user.email} />
        );
        })
    }</div>
  );
};

export default CardList;
