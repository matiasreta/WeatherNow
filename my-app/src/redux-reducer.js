import {GET_CITY,DISCARD,SET_FAVORITES } from "./redux-actions";

const initialState={
    cities:[],
    favorites:[],
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
        case SET_FAVORITES:{
            return{...state,favorites:[...state.favorites,action.payload]}
        }
        default:{
            return{...state}
        }
    }
}
export default reducer;
