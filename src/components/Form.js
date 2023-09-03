import React from "react";
import { useState } from "react";

const MyForm= function(){
    // setState
    const [inputs,setInputs]=useState({})
    // input data
    const handleChange=function(event){
        const name=event.target.name
        const value =event.target.value
        setInputs(values=>({
            ...values,[name]:value
        }))
       
    }

    // select data
    const[myCourse,setCourse]=useState('Open Water Diver')
    const selectedCourse=function(event){
        setCourse(event.target.value)

    }
    // text area
    const[textComments,setTextarea]=useState('')
    const submitComment=function(event){
        setTextarea(event.target.value)
    }

    const [formSubmitted, setFormSubmitted] = useState(false);

    // submit form
    const submitForm=function(event){
        event.preventDefault();
        setFormSubmitted(true);
        
    }
    return(
        <div>
            <form className="ui form" onSubmit={submitForm}>
                <fieldset>
                    <legend style={{padding:'0.8em',}}>DIVING LEARNING INQUIRY</legend>
                    
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" 
                    id="name" 
                    name="username"                  
                    value={inputs.username} 
                    onChange={handleChange}
                    />
                      {/* entered Email */}
                      <div style={{marginTop:"1em"}}>
                        <label htmlFor="email">Enter Email:</label>
                        <input type="email"          
                        id="email" 
                        name="enteredemail"
                        value={inputs.enteredemail} 
                        onChange={handleChange}
                        />
                    </div>


                    {/* entered Phone number */}
                    <div style={{marginTop:"1em"}}>
                    <label htmlFor="PhoneNumber">Enter Phone number:</label>
                        <input type="number"          
                        id="PhoneNumber" 
                        name="enteredPhoneNumber"
                        value={inputs.enteredPhoneNumber} 
                        onChange={handleChange}
                        />
                    </div>

                

                    {/* select PADI courses */}
                    <div style={{marginTop:"1em"}}>
                        <label> Select Interested Courses 
                        <select value={myCourse} onChange={selectedCourse}>
                            <option value='Open Water Diver'>Open Water Diver</option>
                            <option value="Advanced Open Water Diver">Advanced Open Water Diver</option>
                            <option value="Resucre Diver">Resucre Diver</option>
                            <option value='other'>Other Questions</option>
                        </select>
                        </label>
                    </div>

                    {/* text area */}
                    <div style={{marginTop:"1em"}}>
                        <textarea
                        value={textComments}
                        onChange={submitComment}
                        placeholder="Type message..."
                        />                
                    </div>

                

                    {/* submit form */}
                    <div style={{marginTop:"1em"}}>
                        <input type="submit"  className="ui button"/>
                    </div>
                </fieldset>
       

            </form>
              {/* Display the message when formSubmitted is true */}
              {formSubmitted && (
                <div className="ui success message">
                     <div class="header">Form submitted successfully!<br /></div>
                    
                    The Full Name you entered was: {inputs.username}<br />
                    The Email you entered was: {inputs.enteredemail}<br />
                    The Phone number you entered was: {inputs.enteredPhoneNumber}<br />
                    The Course you selected was: {myCourse}<br />
                    The Message you entered was: {textComments}
                </div>
                )}
        </div>
    )
}

export default MyForm;