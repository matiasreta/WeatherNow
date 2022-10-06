import React from "react";
import { connect } from "react-redux";
import {discardCity, setFavorites} from "./redux-actions"
import {StyleCard} from "./styles/StyleCard"

class Card extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler=()=>{
            this.props.discardCity(this.props.id)
        }
        this.clickFavorite=()=>{
            this.props.setFavorites(this.props.name,this.props.id)
        }
    }
    // componentWillUnmount(){
    //     console.log("discarded component")
    // }

    render(){
        return(
        <StyleCard>
            <div className="main">
            <h3>{this.props.name}, {this.props.country} </h3>

                <p >{Math.round(this.props.tempAct)} °C</p>
                <p>Max: {Math.round(this.props.tempMax)} </p>
                <p>Min: {Math.round(this.props.tempMin)} </p>
                <p>main: {this.props.main} </p>
                <p>humidity:{this.props.humidity}%</p>
            
            <div>
                <button className="fav" onClick={this.clickHandler}>favorite</button>
                <button className="del" onClick={this.clickFavorite}> delete </button>
            </div>
            </div>
        </StyleCard>)}
}
const mapDispatchToProps=(dispatch)=>{
    return{discardCity:(cityID)=>dispatch(discardCity(cityID)),
        setFavorites:(name,id)=>dispatch(setFavorites(name,id))
    }
}
export default connect(null,mapDispatchToProps)(Card);