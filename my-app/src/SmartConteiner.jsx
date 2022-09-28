import React from "react";
import { connect } from "react-redux";
import {Card} from "./Card";

class SmartConteiner extends React.Component{
    constructor(props){
        super(props)
        this.state={cities:[2,2]}

        this.putCitiesStage=()=>{
        const [copyCities]=this.state.cities;
        this.setState({cities: [copyCities,3]})
        }

        }

    componentDidMount(){
        console.log("created component");
    }
    componentDidUpdate(){
        console.log(this.state.cities)
    }


    render(){
        return(<>
            <div>
            <Card key={this.props.city.id} 
            name={this.props.city.name}
            main={this.props.city.main}
            country={this.props.city.country}
            tempAct={this.props.city.tempAct}
            img={this.props.city.img}
            />
            </div>
        </>)
    }

}



const mapStateToProps=(state)=>{
    return{city:state.city}
}

export default connect(mapStateToProps,null)(SmartConteiner)