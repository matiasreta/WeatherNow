import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={text:""}
    }
   
    render(){
        return(<>
        <div>
            <input type="search" onChange={(value)=>eventListener(value)}/>
            <button>🔎</button>
        </div>
        </>)
    }
}
const eventListener=(value)=>{
    this.setState({text: this.state.text = Event.target.value})
}
export {SearchBar}