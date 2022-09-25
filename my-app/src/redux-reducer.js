import { DECREMENT,INCREMENT,GET_USERS } from "./redux-actions";

const initialState={
    contador:0,
    contador_2:10,
    users:["hola","mati"],
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
        default:
        {
            return{...state}
        }

    }

}
export default reducer;
