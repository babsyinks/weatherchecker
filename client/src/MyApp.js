import React,{Fragment} from 'react'
import Location from './util/location'
import Weather from './util/weather'
import './MyApp.css'

export default class MyApp extends React.Component{

constructor(){
    super()
    this.state = {address:'',
                  longitude:'',
                  latitude:'',
                  weather:{temp:'',summary:'',time:'',other:''},
                  weather_button:true,
                  loading:{location:false,weather:false},
                  error:{location:'',weather:''}
                 
}
this.getCoordinates = this.getCoordinates.bind(this)
this.getWeatherInfo = this.getWeatherInfo.bind(this)
this.handleSetAddress = this.handleSetAddress.bind(this)
}

getCoordinates(address){
this.setState({loading:{location:true,weather:false}})    
Location(address)
.then(res=>res.json())
.then(result=>{
    const coordinates = result.results[0].locations[0].latLng
    const longitude = coordinates.lng
    const latitude = coordinates.lat
    this.setState({longitude,latitude,weather_button:false,loading:{location:false,weather:false},error:{location:'',weather:''}})
    
})
.catch(error=>{
    console.log(error)
    this.setState({error:{location:`Couldn't Get Coordinates, Please Try Again Later`,weather:''},loading:{location:false,weather:false}})
})
}

getWeatherInfo(){
this.setState({loading:{location:false,weather:true}})  
Weather(this.state.longitude,this.state.latitude)
.then(res=>res.json())
.then(result=>{ 
    if(result.errMsg){
        this.setState({error:{location:'',weather:result.errMsg},loading:{location:false,weather:false}})
    }
    else{
        this.setState({weather:{temp:result.temperature,
        summary:result.summary,time:result.time,other:result.other},
        loading:{location:false,weather:false},error:{location:'',weather:''}
    })
    }
})
.catch(error=>{
    console.log(error)
})
}

handleSetAddress(e){
    const trimmedStr = (e.target.value.replace(/^\s+/,'')).replace(/\s+/g,' ')
    if(trimmedStr<1){
        this.setState({longitude:'',latitude:'',address:trimmedStr,weather:{temp:'',summary:'',time:'',other:''}})
    }
    else{
        this.setState({address:trimmedStr})
    }
    
}

render(){
    return (
        <div className = "wrapper">
            <h1>Weather Checker</h1>
            <div className = "addressWrapper">
                <div>
                   <label>Enter a valid address to get its coordinates:</label><input value = {this.state.address}
                onChange = {this.handleSetAddress}/> 
                </div>
                 
             <button onClick = {()=>{this.getCoordinates(this.state.address)}} disabled = {(this.state.address && !this.state.longitude && !this.state.latitude)?false:true}>Get Coordinates</button>
            </div>
            <div className = "coordinates">
            {this.state.loading.location?<i className="fas fa-circle-notch fa-spin"></i>:(
                this.state.error.location?<div className = "error">{this.state.error.location}</div>:(
                <Fragment>
                    {this.state.longitude && <Fragment><label>Longitude</label><span className = "longLatVals" style = {{backgroundColor:'rgb(67, 104, 226)'}}>{this.state.longitude}</span></Fragment>}
                    {this.state.latitude && <Fragment><label>Latitude</label><span className = "longLatVals" style = {{backgroundColor:'rgb(49, 247, 92)'}}>{this.state.latitude}</span></Fragment> }
                </Fragment>
                )
            )}
            
            </div>
            <div className = "weatherWrapper">
            {this.state.longitude && this.state.latitude && <div className = "weatherAddInfo"><button  onClick = {()=>{this.getWeatherInfo()}} disabled = {this.state.weather_button}>Get Weather Information</button></div> }
            
            <div>
            {this.state.loading.weather?<div className = "weatherAddInfo"><i className="fas fa-circle-notch fa-spin"></i></div>:(
                this.state.error.weather?<div className = "error">{this.state.error.weather}</div> :(
                <div>
                    <p>{`${this.state.weather.summary?this.state.weather.summary:''}`}</p>
                    <p>{`${this.state.weather.temp? `The current temperature is ${((this.state.weather.temp - 32) * (5/9)).toFixed(2)} degrees.` :''}`}</p>
                    <p>{`${this.state.weather.other?this.state.weather.other:''}`}</p>
                    <p>{this.state.weather.time?`The above information is as at today!`:''}</p>
                </div>
                )
            )}   
            </div>    

            </div>
           
        </div>
    )
}

}