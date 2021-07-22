import fetch from 'isomorphic-fetch'

const Weather = (longitude,latitude)=>{

    return fetch(`/`,{method:'post',body:JSON.stringify({longitude,latitude}),headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
        
    })
}

export default Weather