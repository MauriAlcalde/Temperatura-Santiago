const initialState = {
    allDays: false,
    day : {}
}

const dataReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOAD':
                return{
                    ...state,
                    allDays : action.payload 
                }   

        case 'FILTRAR':
            const filtered = state.allDays.find(ele=> ele.dia === action.payload)
            return{
                    ...state,
                    day: filtered
                }
        
        default: 
            return state
    }
}

export default dataReducer