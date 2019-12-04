import React from 'react';
import fetch from 'isomorphic-fetch';

export class Repo extends React.Component{

    constructor(props){
        super(props)
        this.state = {repository:{}}
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(repo_name){
        fetch('https://api.github.com/repos/pro-react/'+repo_name)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            else{
                throw new Error('Resource fetch failed')
            }
        })
        .then(responseData=>{this.setState({repository:responseData})}).catch(
            error=>{this.props.history.pushState(null,'/error')}
        )
    }

    componentDidMount(){
        let repo_name = this.props.match.params.repo_name
        this.fetchData(repo_name)
        

    }

    componentWillReceiveProps(nextProps){
        let repo_name = nextProps.match.params.repo_name
        this.fetchData(repo_name)

    }

    render(){
        let stars = []
        for(let i = 0; i <this.state.repository.stargazers_count;i++){
            stars.push('')

        }
        return (
            <div>
            
            <h1>{this.state.repository.name}</h1>
            <p>{this.state.repository.description}</p>
            <span>{stars}</span>
            
            </div>
        )
    }
}