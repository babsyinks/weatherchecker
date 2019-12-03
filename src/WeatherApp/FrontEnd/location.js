import fetch from 'isomorphic-fetch'
 var Location = (address)=>{
    let  encodedAddress = encodeURIComponent(address)
 return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`)
}

export default Location