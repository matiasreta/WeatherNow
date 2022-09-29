import {GET_CITY,DISCARD } from "./redux-actions";

const initialState={
    cities:[],
}

const reducer = (state= initialState, action)=>{

    switch(action.type){
        case GET_CITY:{
            return{...state,cities:[...state.cities,action.payload]}
        }
        case DISCARD:{
            const arr = state.cities.filter(item=> item.id!==action.payload)
            return{...state,cities:arr}
        }
        default:
        {
            return{...state}
        }

    }

}
export default reducer;
