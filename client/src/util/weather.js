const Weather = (longitude,latitude)=>{
    //https://myweather-checker.herokuapp.com/
    //for development / was used 
    //full route is used for production
    return fetch(`https://myweather-checker.herokuapp.com/`,{method:'post',body:JSON.stringify({longitude,latitude}),headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
        
    })
}

export default Weather