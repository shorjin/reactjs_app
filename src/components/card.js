import React from 'react';
import {Link}from "react-router-dom"


const CardExample=function(props){
  return(
   
    <section className="card1">
      <div className='card_body'>
        <Link to={props.link}><img src={props.picture} alt={"icon"} className="card_image"  /> </Link>
        <h2 className="card_title">{props.title} </h2>
        <p className="card_description">{props.description} </p>
      </div> 
      
    </section>

  )}


export default CardExample
