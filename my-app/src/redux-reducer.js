import { DECREMENT,INCREMENT } from "./redux-actions";

const initialState={
    contador:0,
    contador_2:10
}

const reducer = (state= initialState, action)=>{

    switch(action.type){
        case DECREMENT:
        {
            return{
                ...state, contador: state.contador+1,
            }
        }
        case INCREMENT:
        {
            return{
                ...state, contador: state.contador-1,
            }
        }
        default:
        {
            return{...state}
        }

    }

}
export default reducer;
