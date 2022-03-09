import {getData} from "../../services/query";

const dataActions = {
    obtenerDias: ()=>{
        return async(dispatch)=>{
           const res = await getData()
           console.log(res)
           dispatch({type:'LOAD', payload:res})
        }
    },
    obtenerDia: ( day )=>{
        return(dispatch)=>{
            dispatch({ type:'FILTRAR', payload: day })
         }
    },
}

export default dataActions