import fetch from 'isomorphic-fetch'
 var Location = (address)=>{
    let  encodedAddress = encodeURIComponent(address)
 return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500`)
}
//darksky api url: https://api.darksky.net/forecast/2d21547a706d82e208c64c4b89f4da43/37.8267,-122.4233
export default Location