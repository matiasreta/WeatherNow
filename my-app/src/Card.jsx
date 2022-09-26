import React from "react";
import { connect } from "react-redux";
import {getCityData} from "./redux-actions";

class Card extends React.Component{
    
    componentDidMount(){
        console.log("se creó");
        this.props.getCityData("Lima"); 

    }
    

    render(){
        return(<>
    
            <h2>Card</h2>
            <div>
               {this.props.city}
            </div>
            
            </>)}
}

const mapStateToProps=(state)=>{
    return{city:state.city}
}
const mapDispatchToProps=(dispatch)=>{
   return{getCityData:(city)=>{dispatch(getCityData(city))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);