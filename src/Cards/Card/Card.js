/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./card.css";
const Card = (props) => {
  let data = props.data;
  console.log(data);
  let condition = data.current.condition.text;
  return (
    <div className="weathercard">
      <div className="location">
        <div className="country">
          {data.location.country},{data.location.name}
        </div>
        <div className="temp">{data.current.temp_c}°C</div>
        <div>
          <img src={data.current.condition.icon} />
        </div>
      </div>
      <div className="weatherstate">
        <div className="weatherstateposition">
          <div className="weatherrotation">{condition}</div>
        </div>
      </div>
      <div className="info">
        <div>
          Humidity <br /> {data.current.humidity}%
        </div>

        <div>
          Windspeed <br /> {data.current.wind_kph} Kph
        </div>
        <div>
          Feels like <br />
          {data.current.feelslike_c}°C
        </div>
      </div>
    </div>
  );
};
export default Card;
