
export const GET_CITY = "GET_CITY"


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