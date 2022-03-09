import React from "react";
import { Link } from "react-router-dom";
const CardHome = ({ data }) => {
  console.log(data)
  return (
    <Link to={data.dia} className="link__card">
      <div className="Card__home">
        <h2 className="text-center-white">{data.dia}</h2>
        <img
          src={`${data.icon}`}
          alt="img-referencia"
          className="home__card__img"
        />
        <div className="Card_home_temperaturas">
          <span className="text-center-white">{`${data.temp_min}°C`}</span>
          <span className="text-center-white">{`${data.temp_max}°C`}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardHome;
