import React from "react";
import { useSelector } from "react-redux";
import { Favorites } from "./Favorites";
import { StyleFavoriteList } from "./styles/StyleFavoriteList";


export const FavoritesList=()=>{
    const list = useSelector(state=>state.favorites);

    
    return(<>
        <h4>favorite cities </h4>
        <StyleFavoriteList>
            {list.map((item)=>{
                return(<Favorites key={item.id} name={item.name}/>)
            })}
        </StyleFavoriteList>
    </>)
}
