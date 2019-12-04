import React, {Component} from 'react';

class ContactApp extends Component{

    constructor(){
        super()
        this.state = {text:'',
                      info:[]
                      }
        this.setMyState = this.setMyState.bind(this)
        this.setInfoState = this.setInfoState.bind(this)
        this.removeInfo = this.removeInfo.bind(this)
    }

    setMyState(val){
      this.setState({text:val})
    }

    setInfoState(val){
        if(!this.state.info.includes(val)){
          this.setState({info:[...this.state.info,val]})
        }
        
    }

    removeInfo(val){
        
        this.setState({info:[...this.state.info.filter(unit=>unit !== val)]})
    }

    render(){

        return <div>
            <DisplayInfo info = {this.state.info} remove = {this.removeInfo}/>
            <Search searchTerm = {this.state.text} updateText = {this.setMyState}/>
            <ContactList contacts = {this.props.contacts} searchTerm = {this.state.text} visibility = {(this.state.text.length === 0?'hidden':'visible') } display = {this.setInfoState}/>
        </div>
    }
        
}

const Search = ({searchTerm,updateText})=>

 <input value = {searchTerm} onChange = {(event)=>updateText(event.target.value)}/>

const ContactList = ({contacts,searchTerm,visibility,display})=>{
    let filteredContacts = contacts.filter(contact=>contact.name.indexOf(searchTerm) !== -1 ) 
    return <ContactItem items = {filteredContacts} visibility = {visibility} display = {display}/>
}
  
const ContactItem = ({items,visibility,display})=>
items.map(item=><li key = {item.email} style = {{textAlign:'left',visibility:(visibility === 'hidden'?'hidden':'visible'), cursor:'grab'}} onClick = {()=>display(`${item.name} - ${item.email}`)}>{item.name} - {item.email}</li>)

const DisplayInfo = ({info,remove})=>{
    if(info.length>0){
        return <div>{info.map(unitInfo=><li key = {unitInfo} onClick = {()=>remove(unitInfo)} style = {{cursor:'grab'}}>{unitInfo}</li>)}</div>
    }
    else{
        return ''
    }
    
}


export default ContactApp



