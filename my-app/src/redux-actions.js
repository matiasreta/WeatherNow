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
    const key="4ae2636d8dfbdc3044bede63951a019b";
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${userKey}`)
        .then(response=>response.json())
        .then(data=>dispatch({type:GET_CITY,payload:data}))
    }

}