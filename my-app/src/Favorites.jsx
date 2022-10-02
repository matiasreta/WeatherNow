import React from "react";
import { useDispatch } from "react-redux";
import { getCityData } from "./redux-actions";
import {ButtonFavorites} from "./styles/ButtonFavorites"

export const Favorites=(props)=>{
    const dispatch = useDispatch();

    const clickHandler=()=>{
        dispatch(getCityData(props.name))
    }

    return(<div>
        <ButtonFavorites onClick={clickHandler}>{props.name}</ButtonFavorites>
        </div>)
}