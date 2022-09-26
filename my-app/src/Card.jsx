import React from "react";

class Card extends React.Component{
    
    
    render(){
        return(<>
    
            <h2>Card</h2>
            <div>
                <p>City: {this.props.name} </p>
                <p>Temperatura: {this.props.tempAct} </p>
                <p>Pais: {this.props.country} </p>
                <p>main: {this.props.main} </p>
                <p>img: {this.props.img} </p>
                
            </div>
            
            </>)}
}

export default Card;