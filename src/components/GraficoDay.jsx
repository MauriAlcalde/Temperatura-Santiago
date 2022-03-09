import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
    responsive: true,
    scales: {
        y: {
            min: -10,
            max: 50
        },
    },
    plugins: {
    legend: {
      display: true,
    },
},
};

export default function LineChart() {
    const datos = useSelector(store => store.dataReducer.day)
    const data = useMemo(function () {
    const labels = datos.data?.map(ele=> ele.dt_txt.slice(11, 16))
    const scores = datos.data?.map(ele => ele.main.temp)
    return {
      datasets: [
        {
          label: "Temperatura",
          data: scores,
          tension: 0,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
      ],
      labels,
    };
  }, [datos]);
    

  return <Line data={data} options={options} />;
}