import React from 'react';
import './books.css';



export default class Books extends React.Component{

    constructor(props){
        super(props)
        this.state = {toggle:'none',
        class:'toolTip',
        opacity:1,
        zIndex:0  
    }
        this.handleToggle = this.handleToggle.bind(this)

    }
    
    handleToggle(e){
       let currentDisplay = this.state.toggle === 'none'?'block':'none'
       let currentOpacity = currentDisplay === 'none'?1:0.06
       let currentZindex = currentDisplay === 'none'?0:-1000
       let currentClass = currentDisplay === 'none'?'toolTip':'toolTipSet'
       this.setState({toggle:currentDisplay,class:currentClass,opacity:currentOpacity,zIndex:currentZindex})
    }
    render(){
        return (
            <div>
                <span className = 'description' style = {{display:this.state.toggle,backgroundColor:this.props.theme,cursor:'pointer',width:window.innerWidth<600?250:''}} onClick = {this.handleToggle}>{this.props.description}</span>
                <div  style = {{backgroundColor:this.props.theme, borderRadius:'10px',opacity:this.state.opacity,zIndex:this.state.zIndex}}>
            <section id = 'title' style = {{boxSizing:'border-box',cursor:'pointer'}}><span onClick = {this.handleToggle} className = {this.state.class} >{this.props.title}</span>
            <span ></span></section>
            <section id = 'author'>{this.props.author}</section>
            <section id = 'datePublished'>{this.props.datePublished}</section>
            <section id = 'price'>{this.props.price}</section>
            <section id = 'genre'>{this.props.genre}</section>
        </div>
            </div>
        
    )
    }
    
}