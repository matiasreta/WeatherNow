import React from "react";
import { connect } from "react-redux";
import {discardCity} from "./redux-actions"

class Card extends React.Component{
    
    render(){
        return(<>
    
            <h2>Card</h2>
            <div>
                <button>❌</button>
            </div>
            <div>
                <p>City: {this.props.name} </p>
                <p>Temperatura: {this.props.tempAct} </p>
                <p>Pais: {this.props.country} </p>
                <p>main: {this.props.main} </p>
                <p>img: {this.props.img} </p>
            </div>
            
            </>)}
}
const mapDispatchToProps=(dispatch)=>{
    return{discardCity:(cityID)=>dispatch(discardCity(cityID))}
}
export default connect(null,mapDispatchToProps)(Card);