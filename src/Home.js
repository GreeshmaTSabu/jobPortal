import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

//import './App.css';
class Home extends Component {

   constructor(props) {
     super(props);
   
     this.state = {
        data: ""
     }
  }
   
   componentDidMount(){
       axios.get('https://reqres.in/api/users')
           .then(function(response) {
               console.log(response.data.data);
           
           })
           .catch(function(error) {
               console.log(error);
           });
   }

   render() {
      
       return (
       <div>
           <div className="HomeMain">
               <div className="HomeTop">
                   <input type="text" ref="search" className="search" placeholder="Search......"/>
                   <button className="SearchButton">Search</button>
                   <button style={{marginLeft:50+"px"}} className="SearchButton">Add User</button>
               </div>
               <div className="card">
                
               </div>
               
           </div>
       </div>
       );
   }
}
export default Home;
