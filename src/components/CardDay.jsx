import React from "react";

const CardDay = ({ data }) => {
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon.slice(0,2)}d@2x.png`;
  const hora = data.dt_txt.slice(11, 16);
  const temperatura = data.main.temp.toFixed(1);
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const viento = data.wind.speed;
  return (
    <div className="Card__day">
      <span>Hora : {hora}</span>
      <span>Temperatura : {temperatura} °C</span>
      <span>Humedad : {humedad} %</span>
      <span>Viento : {viento} kmh</span>
      <img src={url} alt="clima" />
      <span>{descripcion}</span>
    </div>
  );
};

export default CardDay;
