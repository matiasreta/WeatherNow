import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={text:""}
    }

    render(){
        return(<>
        <div>
            <input type="search"/>
            <button>🔎</button>
        </div>
        </>)
    }
}
export {SearchBar}