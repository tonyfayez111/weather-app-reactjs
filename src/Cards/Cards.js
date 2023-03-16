import React from "react";
import Card from "./Card/Card";
import "./cards.css";

export const Cards = (props) => {
  if (!props.data?.current) return;

  return (
    <div className="cards">
      <Card data={props.data} />
    </div>
  );
};
