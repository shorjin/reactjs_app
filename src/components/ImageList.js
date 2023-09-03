// this shows the search result
import React from "react"
const ImageList=function(props){
    const images=props.foundimages.map(
        (image)=>{
        return (
        <img src={image.urls.regular} alt={image.alt_description} key={image.id} className='image'/>
        
        )

    })
    return(
        <div className="photolist">
            <h2 style={{textAlign:"center",fontSize:"40px"}}>My images list</h2>
            <div className="images">{images}</div>
            
        </div>
    )
}
export default ImageList;