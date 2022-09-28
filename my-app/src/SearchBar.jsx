import React from "react";
import { connect } from "react-redux";
import { getCityData } from "./redux-actions";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={text:""}
    
        this.eventListener=(event)=>{
            this.setState({text:event.target.value})
            // no esta mutado
        }
        this.clickHandler=()=>{
            this.props.getCityData(this.state.text)
            console.log("se buscó")
        }

    }
    componentDidUpdate(){
        console.log(this.state.text)
        
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
const mapDispatchToProps=(dispatch)=>{
    return{getCityData:(city)=>dispatch(getCityData(city))}
    }


export default connect(null, mapDispatchToProps)(SearchBar);
