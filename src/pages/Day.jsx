import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import dataActions from '../redux/actions/dataActions'
import { useParams,useSelector } from 'react-router-dom'
import CardDay from '../components/CardDay'
import LineChart from "../components/GraficoDay"
import {Link} from "react-router-dom"

const Day = ()  =>{
  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(dataActions.obtenerDia(params.Day))
  },[])
  
  const data = useSelector( store=> store.dataReducer.day)
  return (
    <>
    <div className="cajaDia">
      <h1 className="text-center-white">{data && data.dia}</h1>
      <div className="Conteiner__card__day">
      {data && data.data?.map( element => <CardDay data={element} key={element.dt} />)}
      </div>
      <div className="home__grafico">
        <LineChart/>
      </div>
      <Link to="/" className="btn__link" >Volver al inicio</Link>
    </div>
    </>
  )
}

export default Day