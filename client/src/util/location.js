import keys from '../Constants'
 var Location = (address)=>{
    const  encodedAddress = encodeURIComponent(address)
    //location=1600+Pennsylvania+Ave+NW,Washington,DC,20500
 return fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${keys.geolocation_key}&location=${encodedAddress}`)
}

export default Location