import React from "react";
import CardHome from "../components/CardHome";
import { useSelector } from "react-redux";
import LineChart from "../components/Grafico"
const Home = () => {
  const data = useSelector((store) => store.dataReducer.allDays);

  return (
    <div className="home">
      <div>
        <h1 className="home__title">Pronostico</h1>
        <h2 className="home__subtitle">Región Metropolitana de Santiago</h2>
      </div>
      <span className="border_b"></span>
      <div className="home__card__container">
        {data && data.map((day) => (
          <CardHome data={day} key={day.dia} />
        ))}
      </div>
      <div className="home__grafico">
        {data && <LineChart datos={data}/>}
      </div>
    </div>
  );
};

export default Home;
