import { useMemo,useState } from "react";
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
export default function LineChart({datos}) {
    const labels = datos.map(ele => ele.dia )
    const scores = datos.map(ele => ele.temp_promedio)
    const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Temperatura promedio",
          data: scores,
          tension: 0,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;
}