import React from "react";
import { connect } from "react-redux";

class Card extends React.Component{
    

    render(){
        return(
            <>
            <h2>Card</h2>
            {this.props.contador}

            </>
        )}


}

const mapStateToProps=(state)=>{
    return {contador:state.contador}
}


export default connect(mapStateToProps,null)(Card);