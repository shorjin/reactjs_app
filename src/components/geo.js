import React from 'react';
import Hemisphere_Display from './HemisphereDisplay';
class Geo extends React.Component{
/* first method
    constructor(props){
        super(props)
        this.state={latitude:''}
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {this.setState({latitude: position.coords.latitude})}
        )
    }
    */

    // another method
   state={latitude:''}
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position)=> {this.setState({latitude: position.coords.latitude})}
    )
    

   }
    render (){
       
        return(
            <div className='geo'>
                <h1>Geolocation</h1>
                <p> latitude=<span>{this.state.latitude}</span></p>
                <Hemisphere_Display latitude={this.state.latitude}/>
              
                
            </div>
        ) 
}
}
export default Geo;