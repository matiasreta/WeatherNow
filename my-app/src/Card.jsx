import React from "react";
import { connect } from "react-redux";
import {discardCity} from "./redux-actions"

class Card extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler=()=>{
            this.props.discardCity(this.props.id)
        }
    }
    componentWillUnmount(){
        console.log("discarded component")
    }

    render(){
        return(<>
            <h2>{this.props.name}, {this.props.country} </h2>
            <div>
                <button onClick={()=>this.clickHandler()}>❌</button>
                <button>❤️</button>
            </div>
            <div>
                <p>Temperatura: {this.props.tempAct} </p>
                <p>main: {this.props.main} </p>
            </div>
        </>)}
}
const mapDispatchToProps=(dispatch)=>{
    return{discardCity:(cityID)=>dispatch(discardCity(cityID))}
}
export default connect(null,mapDispatchToProps)(Card);