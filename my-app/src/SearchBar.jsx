import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={text:""}
    
        this.eventListener=(event)=>{
            this.setState({text: this.state.text = event.target.value})
            
        }

    }
    componentDidUpdate(){
        console.log(this.state.text)
    }
   
    render(){
        return(<>
        <div>
            <input type="search" onChange={(event)=>this.eventListener(event)}/>
            <button>🔎</button>
        </div>
        </>)
    }
}

export {SearchBar}
