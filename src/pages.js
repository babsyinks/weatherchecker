import React from 'react';
import {Link} from 'react-router-dom';
import {FaMeetup} from 'react-icons/fa/index.esm'


export const home = ()=>
                <div>
                    <nav className = "navClass">
                    <Link to = "about" className = "linkClass">About</Link>
                    <Link to = "products" className = "linkClass">Products</Link>
                    <Link to = "events" className = "linkClass">Events</Link>
                    <Link to = "contact" className = "linkClass">Contact</Link>
                    </nav>
                </div>
                
export const about = ()=>
                     <div>
                         <RenderIcon />
                         <h1>About This Company</h1>
                         <p>We are a company devoted to providing quality serviced to suite your needs</p>
                     </div>

export const products = (props)=>
                        <div>
                            <RenderIcon />
                            <h1>Products We Offer</h1>
                            <p>We offer competitive products that are hard to beat</p>
                           
                            
                        </div>

export const events = ()=>
                      <div>
                          <RenderIcon />
                          <h1>Upcoming Events</h1>
                          <p>We look forward to seeing you in our upcoming events.
                              Check this section regularly for our latest events</p>
                      </div>

export const contact = ()=>
                       <div>
                           <RenderIcon />
                           <h1>Contact Us</h1>
                           <p>Phone - 08051750010</p>
                           <p>Email - Babawarunn@yahoo.com</p>
                           <address>Goom drive, plot 50a,maitama,abuja</address>
                       </div>

export const invalid_page = ({location})=>
                             <div>
                              <h1>{location.pathname} not found</h1>
                             </div>   

const RenderIcon = ()=>
<Link to = "" className = "linkClass"><FaMeetup className = "navClass"/></Link>

class RepoList extends React.Component{
    constructor(){
      super()
      this.state = {repositories:[]}
    }
  
    componentDidMount(){
  
      fetch('https://api.github.com/users/pro-react/repos')
      .then(response=>response.json())
      .then(responseData=>this.setState({repositories:responseData}))
      
  
    }
  
    render(){
  
      return (
        <ul>
            
          {this.state.repositories.map((repo)=><li key = {repo.name}><Link to = {`/repo/${repo.name}`} >{repo.name}</Link></li>
          )}
          
        </ul>
      )
    }
  }