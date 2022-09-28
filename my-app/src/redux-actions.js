export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const GET_USERS = "GET_USERS"
export const GET_CITY = "GET_CITY"

export const decrement=()=>{
    return {type:DECREMENT}
}
export const increment=()=>{
    return {type:INCREMENT}
}
export const getUsers =()=>{
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_USERS,payload:data}))
    }
}
export const getCityData=(city)=>{
    const key="a876ef9be82dcd6e06130bb4b5694fff";
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(response=>response.json())
        .then(data=>{
            const city={main:data.weather[0].main,
                        name: data.name,
                        id: data.id,
                        description:data.weather[0].description,
                        tempMax:data.main.temp_max,
                        tempMin:data.main.temp_min,
                        humindity:data.main.humindity,
                        country:data.sys.country,
                        tempAct:data.main.temp,
                        img:data.weather[0].icon,
            }
            dispatch({type:GET_CITY,payload:city})
        
        })
    }

}