import React from 'react'

const Profile = props => {
    return (
        <div>
             {props.children}
            <h1> {props.fullName} </h1>
            <h2> Bio: <span style={{color:"magenta"}}> {props.bio} </span></h2>
            <h3> Profession: <span style={{color:"blue"}}>{props.profession}</span> </h3>
            <button onClick={() => props.handleName("Mehdi Habib")}>Click Here</button>
            
            
        </div>
    )
}

Profile.defaultProps={
    fullName:"Mehdi" ,
    bio:"I'm Tunisian" ,
    profession:"Student"
}







export default Profile

