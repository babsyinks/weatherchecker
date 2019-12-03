import React from 'react'
import Location from './location'

export default class MyApp extends React.Component{

constructor(){
    super()
    this.state = {address:'',
                  longitude:'',
                  latitude:''
}
this.getCoordinates = this.getCoordinates.bind(this)
this.getWeatherInfo = this.getWeatherInfo.bind(this)
}

getCoordinates(address){
Location(address).then(result=>{})
}

getWeatherInfo(longitude,latitude){

}


render(){
    return (
        <div>
            <div>
                 <label style = {{marginLeft:10,marginRight:5}}>Enter a valid address to get its coordinates:</label><input value = {this.state.address}
             onChange = {(e)=>{this.setState({address:e.target.value})}}/>
             <br></br>
             <button style = {{margin:10,backgroundColor:'rgb(171, 238, 150)'}} onClick = {()=>{this.getCoordinates(this.state.address)}}>Get Coordinates</button>
            </div>
            <div>
            <span>{this.state.longitude}</span><span>{this.state.latitude}</span>
            </div>
            <div>
            <button style = {{marginBottom:10,marginLeft:10,backgroundColor:'rgb(157, 157, 248)'}} onClick = {()=>{this.getWeatherInfo(this.state.longitude,this.state.latitude)}}>Get Weather Information</button>
            <div>
                
            </div>

            </div>
           
        </div>
    )
}
git
}