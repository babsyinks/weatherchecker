import React from 'react';
import Books from './books'; 
import './books.css';

const arrayVals = [{id:1,title:'Alice in the wonderland', description: 'Alice in the Wonderland is a story about a young girl that' 
+' explored Wonderland for a long time', author:'Joyce Meyers',
datePublished:new Date('2015-03-25').toDateString(),price:500,genre:'adventure',theme:'blue'},
{id:2,title:'The Voice in the Meadow',  description: 'The Voice in the Meadow is a mystic story about a pirate on' 
+' an expedition who got lost and was haunted by the ghost of someone he killed',author:'Sam Beckenbeaur',
datePublished:new Date('2017-08-04').toDateString(),price:800,genre:'thriller',theme:'green'},
{id:3,title:'The Crow and the Sparrow',description:'This is a story about the symbiotic relationship between'
+' a Crow and Sparrow that they used to survive a harsh weather and several attacks from predators',author:'Janet Benson',
datePublished:new Date('2010-01-29').toDateString(),price:600,genre:'fantasy',theme:'red'},
{id:4,title:'Something New',description:'Something New is a romantic novel about how 2 divorcees in search of love'
+' found each other and discovered they had mutual needs',
author:'John Anderson',datePublished:new Date('2018-11-17').toDateString(),
price:700,genre:'gospel',theme:'black'},{id:5,title:'Hanky Patsy',description:'This is an Animation Novel about'
+' Hanky Patsy who fell down from the city wall and broke his neck, only to assemble it together himself',
author:'Jason Miller',datePublished:new Date('2013-05-15').toDateString(),price:500,genre:'anime',theme:'purple'}]


const MyContext = React.createContext([])

export default class Context extends React.Component{

    constructor(props){

        super(props)

        this.state = {bookDetails:arrayVals}

    }  

      // static contextType = MyContext
    render(){
        return (
            <MyContext.Provider value = {this.state.bookDetails}>
                
            <BookList />
            </MyContext.Provider>

            
        )
    }
}

class BookList extends React.Component{

   

      static contextType = MyContext

    render(){
        return (
            <div id = 'books'>
            {this.context.map((obj,i)=>{
                return (<div key = {i} id = {`book${i}`} >
                
                    <Books {...obj}/>
                    
                
                </div>)})} 
           </div>
        )
    }


}
