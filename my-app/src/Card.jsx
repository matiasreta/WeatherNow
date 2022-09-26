import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    
    
    render(){
        return(<>
    
            <h2>Card</h2>
            <div>
                <p>Base?: {this.props.name} </p>
            </div>
            
            </>)}
}

export default Card;