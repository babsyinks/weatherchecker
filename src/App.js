import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import {HashRouter,Switch,Route} from 'react-router-dom';
import {home,about,products,events,contact,invalid_page} from './pages.js';
import ContactApp from './contactwork.js';
import {Repo} from './repos.js';
import ServerError from './ServerError.js';
import MyApp from './WeatherApp/FrontEnd/myApp'



class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {loading:false,
                  names:[]
                  }
  }

  componentDidMount(){
    this.setState({loading:true})
    
    fetch('https://restcountries.eu/rest/v1/all').then(response=>response.json())
    .then(countryList=>countryList.map(country=>country.name))
    .then(names=>this.setState({names,loading:false}))
    .catch(err=>console.log(`Error fetching resource: ${err}`))
  }

  render(){

    const str = (this.props.age>18)?'You are old enough,you can enter':'You are a baby,you are too young to enter'
    const{names,loading} = this.state;
    const val = compose(loading,names)

    
    
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HashRouter >
          <Switch>
          <Route exact path = "/" component = {home}></Route>
          <Route path = '/about' component = {about}></Route>
          <Route path = '/products' component = {products}></Route>
          <Route path = '/repo/:repo_name' component = {Repo}></Route>
          <Route path = '/events' component = {events}></Route>
          <Route path = '/contact' component = {contact}></Route>
          <Route path = '/error' component = {ServerError}></Route>
          <Route component = {invalid_page}></Route>
          </Switch>
          
        </HashRouter>

        <h1>First React Project</h1>
        <p>Happy Coding!</p>
        <p>First Lesson will be up shortly</p>

        <p>{str}</p>

        <div>{val}</div>

      <ContactApp contacts = {contactsList} />
      </header>
      
      
    </div>
    <MyApp/>
    </div>

  ); 
  }

  
  
}





let contactsList = [
  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
  { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
  { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
  { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
  ]

function compose(loading,names){
  if(loading){
    console.log('Loading Data...')
    return <p>Loading Data...</p>
    
  }
  else{
    if(names.length){
      return <ul>{names.map((name,i)=><li key = {i}>{name}</li>)}</ul>
    }
    else{
      return <p>empty data set</p>
    }
  }
 
}
export default App;


