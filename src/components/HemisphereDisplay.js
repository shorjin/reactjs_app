import React from 'react';
import Geo from './geo';
import southernImg from "../images/south.jpg"
import northernImg from "../images/north.jpg"
import ecuatorianImg from "../images/line.png"

const Hemisphere_Display = (props) =>{
    const hemisphereResult=props.latitude
    let picture
    let userLocation=''
    if(hemisphereResult>0){
        userLocation='Northern Hemisphere'
        picture=northernImg
    }
    else if(hemisphereResult<0) {
        userLocation='Southern Hemisphere'
        picture=southernImg
    }
    else{
        userLocation='You are at the Ecuadorian line!'
        picture=ecuatorianImg
    }
  
 
       return(
            <div className="hemi">
                <p>Welcome to hemisphere app</p>
                <p>You are at <span>{userLocation}</span></p>
                <img src={picture} style={{width:"20%"}} />
            </div>
        )
    }


export default Hemisphere_Display;