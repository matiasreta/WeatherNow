import React from "react";
//import {connect} from "react-redux";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={text:""}
    
        this.eventListener=(event)=>{
            this.setState({ text: this.state.text = event.target.value})
            // no esta mutado
        }

    }
    componentDidUpdate(){
        console.log(this.state.text)
    }
    clickHandler(){
      console.log("clickeooo")  
    }
   
    render(){
        return(<>
        <div>
            <input type="search" onChange={(event)=>this.eventListener(event)}/>
            <button onClick={()=>this.clickHandler()}>🔎</button>
        </div>
        </>)
    }
}

export {SearchBar}
