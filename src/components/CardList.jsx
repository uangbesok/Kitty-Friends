import React from "react";
import Card from "./Card";
// import { robots } from "./robots";

const CardList = ({ robots }) => {
  return (
    <div>{
        robots.map(user => {
        const {id, phone, name, email} = user;
        return (
            <Card key={id} id={phone} name={name} email={email} />
        );
        })
    }</div>
  );
};

export default CardList;
