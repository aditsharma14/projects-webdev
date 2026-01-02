     import React, { Component } from 'react';
     import './contentrating.css'

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
           handleLike:() => {
             this.setState((prevState) => ({
                 likes: prevState.likes + 1
               }));
           },
           handleDislike:() => {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1
               }));
           }
           };
       }
       render() {
         return (
          <>
          <h1>Text Content Rating</h1>
          <div className='content-rating'>
             <p>React is a popular JavaScript library for building dynamic and reusable
                 user interfaces, focusing on a component-based architecture where UIs are
                  broken down into independent, modular parts like buttons or navigation bars, 
                  which manage their own state and logic. It uses a virtual DOM for efficient updates, 
                  comparing changes in the virtual representation to only update the necessary parts
                   of the actual browser DOM, making applications fast and interactive, 
                often used for single-page applications (SPAs) and mobile apps via React Native. </p>
             <div className='rating-buttons'>
             <button className="like-button" onClick={this.state.handleLike}>
                 Like ({this.state.likes})
               </button>
               <button className="dislike-button" onClick={this.state.handleDislike}>
                 Dislike ({this.state.dislikes})
               </button>
             </div>

          </div>
          </>
         );
       }
     }

 export default ContentRating;