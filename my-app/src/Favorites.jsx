import React from "react";
import { useDispatch } from "react-redux";
import { getCityData } from "./redux-actions";

export const Favorites=(props)=>{
    const dispatch = useDispatch();

    const clickHandler=()=>{
        dispatch(getCityData(props.name))
    }

    return(<div>
        <button onClick={clickHandler}><p>{props.name}</p></button>
        </div>)
}