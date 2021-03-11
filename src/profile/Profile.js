import React from 'react'

const Profile = props => {
    return (
        <div>
            <span> <img style={{width:"200px", height:"200px"}} src="{props.children}" alt="myImage" /> </span>
            <h1 style={{fontStyle:"italic"}}> {props.fullName} </h1>
            <h2> Bio: <span style={{color:"magenta"}}> {props.bio} </span></h2>
            <h3> Profession: <span style={{color:"blue"}}>{props.profession}</span> </h3>
            <button onClick={() => props.handleName("Mehdi Habib")}>Click Here</button>
            
            
        </div>
    )
}

export default Profile
