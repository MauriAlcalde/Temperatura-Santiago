import axios from "axios";
import moment from "moment";
moment.locale("es-MX");

const traducir = (day) =>{
  let result; 
  switch (day) {
    case 'Monday':
      result = "Lunes"
      break;
    case 'Tuesday':
      result = "Martes";
      break;
    case 'Wednesday':
      result = "Miercoles";
      break;
    case 'Thursday':
      result = "Jueves"
      break;
    case 'Friday':
      result = "Viernes"
      break;
    case 'Saturday':
      result = "Sabado"
      break;
    case 'Sunday':
      result = "Domingo"
      break;
    
    default:
      result = day
  }
  return result
}

export const getData = async () => {
  const API_KEY = "531b657d1bf8e5bf9511d898ee96de6e";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=-33.459229&lon=-70.645348&appid=${API_KEY}&units=metric&lang=es`;
  try {
    const res = await axios.get(URL);
    const copia = [...res.data.list]
    const indice = copia.filter(ele => ele.dt_txt.slice(0,10) === copia[0].dt_txt.slice(0,10)).length
    const result = []

    for(let i = 0; i < 5; i++) {
        const date = res.data.list[i].dt_txt.slice(0, 10);
        const day = moment(date).format("dddd");
        const dia = traducir(day)
        const amount = i === 0 ? indice : 8
        const aux = {
            "dia" : dia,
            "data" : res.data.list.splice(0, amount),
        }
        
        aux.temp_max = (Math.round(aux.data.map(ele => ele.main.temp_max ).reduce((acc,el) => acc + el ) ) / amount).toFixed(1)
        aux.temp_min = (Math.round(aux.data.map(ele => ele.main.temp_min ).reduce((acc,el) => acc + el ) ) / amount).toFixed(1)
        aux.icon = `http://openweathermap.org/img/wn/${aux.data[0].weather[0].icon.slice(0,2)}d@2x.png`
        aux.temp_promedio = (Math.round(aux.data.map(ele => ele.main.temp ).reduce((acc,el) => acc + el ) ) / amount).toFixed(1)
        result.push(aux)
    }
  
    return result;
    
  } catch (e) {console.log(e)}
};
