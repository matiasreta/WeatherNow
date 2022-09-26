import React from "react";
import { connect } from "react-redux";
import {getCityData} from "./redux-actions";
import Card from "./Card";

class SmartConteiner extends React.Component{
    //state={cityes:[]}

    componentDidMount(){
        console.log("se creó");
        this.props.getCityData("Lima"); 
    }

    render(){
        return(<>
            <div>
            <Card key={this.props.city.id} name={this.props.city.base} wather={this.props.city.weather}/>
            </div>
        </>)
    }

}


const mapStateToProps=(state)=>{
    return{city:state.city}
}
const mapDispatchToProps=(dispatch)=>{
   return{getCityData:(city)=>{dispatch(getCityData(city))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(SmartConteiner)