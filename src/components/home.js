import React from "react";
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";

import '../style.css';
import CardExample from "./card"

const Home=function(){
    return(
        <div>
            
            <div className="Wrapper">
            
                <CardExample
                picture={pic1}
                title="Geolocation"
                description="The geolocation application displays an image of either the northern or southern hemisphere based on the user's latitude location. This functionality is achieved using the geolocation API "
                link='./geo'
                />
                <CardExample
                picture={pic2}
                title="Image Searcher"
                description="The ReactJS app searches for images on the Unsplash website. The API is implemented using AJAX and API technology."
                link='./search'
                />
                <CardExample
                picture={pic3}
                title="Contact Us"
                description="Please submit the form and contact us"
                link='./Form'
                />
              

        </div> 
    </div>
    )
}

export default Home;