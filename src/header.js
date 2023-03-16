import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export const Header = (props) => {
  const [location, setLoacation] = useState("Egypt");
  const url = `https://api.weatherapi.com/v1/current.json?key=10109f2e84f34bf6be1183115231103&q=${location}&aqi=no`;

  useEffect(() => {
    axios.get(url).then((response) => {
      return props.setData(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="headercontainer">
      <form className="header">
        <input
          type="text"
          placeholder="Search here"
          className="headerinput"
          onChange={(event) => setLoacation(event.target.value)}
          tabIndex="0"
        ></input>
      </form>
    </div>
  );
};
