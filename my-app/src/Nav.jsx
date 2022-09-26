import React from "react";
import { SearchBar } from "./SearchBar";

class Nav extends React.Component{
    
    render(){
        return(<>

            <div>
                <h1> WeatherNOW </h1>
            </div>
            <div>
                <SearchBar/>
            </div>
        
        </>)

    }

}
export {Nav};