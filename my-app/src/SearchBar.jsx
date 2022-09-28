import React from "react";
import { connect } from "react-redux";
import { getCityData } from "./redux-actions";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={text:""}
    
        this.eventListener=(event)=>{
            this.setState({ text: this.state.text = event.target.value})
            // no esta mutado
        }
        this.clickHandler=()=>{
            this.props.getCityData(this.state.text)
            console.log("se buscó")
            console.log(this.props.city)
            
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

const mapStateToProps=(state)=>{
    return{city:state.city}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
