import React from "react";
import { connect } from "react-redux";
import { getCityData } from "./redux-actions";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={text:""}
        this.eventListener=(event)=>{
            this.setState({text:event.target.value})
        }
        this.clickHandler=()=>{
            this.props.getCityData(this.state.text)
        }
    }
    // componentDidUpdate(){
    //     console.log(this.state.text) 
    // }
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
// puedo hacer que se borre el texto de busqueda despues de clickear y sea efectivo.
export default connect(null, mapDispatchToProps)(SearchBar);
