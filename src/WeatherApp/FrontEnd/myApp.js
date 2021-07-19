import React from 'react'
import Location from './location'
import Weather from './weather'
import './weather.css'

export default class MyApp extends React.Component{

constructor(){
    super()
    this.state = {address:'',
                  longitude:'',
                  latitude:'',
                  weather:{temp:'',summary:'',time:''},
                  weather_button:true,
                  coordinates_button:true
                 
}
this.getCoordinates = this.getCoordinates.bind(this)
this.getWeatherInfo = this.getWeatherInfo.bind(this)
}

getCoordinates(address){
Location(address)
.then(res=>res.json())
.then(result=>{
    const coordinates = result.results[0].locations[0].latLng
    const longitude = coordinates.lng
    const latitude = coordinates.lat
    this.setState({longitude,latitude,weather_button:false})
    
})
.catch(error=>{
    console.log(error)
})
}

getWeatherInfo(){
Weather(this.state.longitude,this.state.latitude)
.then(res=>res.json())
.then(result=>{ 
    
    this.setState({weather:{temp:result.temperature,
        summary:result.summary,time:result.time}})


})
.catch(error=>{
    console.log(error)
})
}
//.results[0].locations[0].latLng
//.currently.temperature

render(){
    const date = new Date(this.state.weather.time)
    return (
        <div className = "wrapper">
            <h1>Weather Checker</h1>
            <div>
                 <label style = {{marginLeft:10,marginRight:5}}>Enter a valid address to get its coordinates:</label><input value = {this.state.address}
             onChange = {(e)=>{this.setState({address:e.target.value})}}/>
             <br></br>
             <button style = {{margin:10,backgroundColor:'rgb(171, 238, 150)'}} onClick = {()=>{this.getCoordinates(this.state.address)}} disabled = {this.state.address?false:true}>Get Coordinates</button>
            </div>
            <div className = "coordinates">
            <label>{this.state.longitude?'Longitude':''}</label><span style = {this.state.longitude?{border:'2px solid black',backgroundColor:'rgb(67, 104, 226)',margin:'20px', padding:'5px'}:{}}>{this.state.longitude?this.state.longitude:''}</span>
            <label>{this.state.latitude?'Latitude':''}</label><span style = {this.state.latitude?{border:'2px solid black',backgroundColor:'rgb(49, 247, 92)',margin:'20px', padding:'5px'}:{}}>{this.state.latitude?this.state.latitude:''}</span>
            </div>
            <div>
            <button style = {{marginBottom:10,marginLeft:10,backgroundColor:'rgb(157, 157, 248)'}} onClick = {()=>{this.getWeatherInfo()}} disabled = {this.state.weather_button}>Get Weather Information</button>
            <div>

            <div style = {{fontWeight:'bold'}}>
            <p>{`The Weather is ${this.state.weather.summary?this.state.weather.summary:'unknown because its not available now.'}`}</p>
            <p>{`The current temperature is ${this.state.weather.temp? `${this.state.weather.temp} degrees` :'not yet available.'}`}</p>
             <p>{this.state.weather.time?`The above information is as at ${new Date().toDateString()}`:''}</p>   
            </div>    
                
            </div>

            </div>
           
        </div>
    )
}

}