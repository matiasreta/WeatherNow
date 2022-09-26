import { DECREMENT,INCREMENT,GET_USERS,GET_CITY } from "./redux-actions";

const initialState={
    contador:0,
    users:["hola","mati"],
    city:{},
}

const reducer = (state= initialState, action)=>{

    switch(action.type){
        case DECREMENT:
        {
            return{...state, contador: state.contador-1,}
        }
        case INCREMENT:
        {
            return{...state, contador: state.contador+1,}
        }
        case GET_USERS:{
            return{...state,users:action.payload}
        }
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
