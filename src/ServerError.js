import React, {Component} from 'react';

const styles={
    root:{
    textAlign:'center'
    },
    alert:{
    fontSize:80,
    fontWeight: 'bold',
    color:'#e9ab2d'
    }
    };

class ServerError extends Component{
    constructor(){

    }

    render(){
        return (
            <div style ={styles.root}>
            <div style = {styles.alert}>&#9888;</div>
            <h2>Oops, Something went wrong</h2>
            <p>Repositories could'nt be fetched</p>
            </div>

            
        )
    }
}

export default ServerError