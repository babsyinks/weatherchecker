import fetch from 'isomorphic-fetch'

const Weather = (longitude,latitude)=>{

    return fetch(`http://localhost:3001`,{method:'post',body:JSON.stringify({longitude,latitude}),headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
        
    })
}

export default Weather




//darksky api url: https://api.darksky.net/forecast/2d21547a706d82e208c64c4b89f4da43/37.8267,-122.4233