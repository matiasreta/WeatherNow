import React from "react";
import { connect } from "react-redux";
import {Card} from "./Card";

class SmartConteiner extends React.Component{
    constructor(props){
        super(props)
        this.cities=[];

        this.putCitiesStage=()=>{
            this.cities.push(this.props.city)
        };

    };
    componentDidMount(){
        console.log("created component");
    };
    componentDidUpdate(){
        this.putCitiesStage();
        console.log(this.cities)
    };

    render(){
        return(<>
            <div>
                {this.cities?this.cities.map(item=>

                <Card key={item.id} 
                name={item.name}
                main={item.main}
                country={item.country}
                tempAct={item.tempAct}
                img={item.img}

                />):"hola"}
            </div>
            {/* <button onClick={()=>this.putCitiesStage()}>agregar</button> */}
        </>)
    };

}



const mapStateToProps=(state)=>{
    return{city:state.city}
}

export default connect(mapStateToProps,null)(SmartConteiner)