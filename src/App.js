import "./App.css";
import { Cards } from "./Cards/Cards";
import { Header } from "./header";
import React, { useState } from "react";

export const App = () => {
  const [data, setData] = useState({});

  return (
    <div className="body">
      <div className="container">
        <Header setData={setData} />
        <Cards data={data} />
      </div>
    </div>
  );
};
