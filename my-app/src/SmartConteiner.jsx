import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class SmartConteiner extends React.Component{
    
    // componentDidMount(){
    //     console.log("created component");
    // };

    render(){
        return(<>
            <div>
            {this.props.cities?this.props.cities.map(item=>
            <Card key={item.id}
            name={item.name}
            main={item.main}
            country={item.country}
            tempAct={item.tempAct}
            id={item.id}
            />):null}
            </div>
        </>)
    };
}

// puedo hacer un filter y mostrar una sola linea aca. Recien cuando el componente se Monta puedo crear la lista.

// ahora mismo puedo agregar pero no puedo eliminar y mostrarlo. por que no uso el state


const mapStateToProps=(state)=>{
    return{cities:state.cities}
}

export default connect(mapStateToProps,null)(SmartConteiner)