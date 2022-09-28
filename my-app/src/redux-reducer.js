import {GET_CITY } from "./redux-actions";

const initialState={
    contador:0,
    users:["hola","mati"],
    city:{},
}

const reducer = (state= initialState, action)=>{

    switch(action.type){
        case GET_CITY:
        {
            return{...state,city:action.payload}
        }
        default:
        {
            return{...state}
        }

    }

}
export default reducer;
