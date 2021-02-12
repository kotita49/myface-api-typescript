
import React, { useState, useEffect } from 'react';

function CreateUser(){
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profileImage, setProfileImage] =useState("");
    const [coverImage, setCoverImage] = useState("");
    const [validName, setValidName]= useState(false); 
    const [validUsername, setValidUsername]= useState(false); 
    const[validEmail, setValidEmail] = useState(false);
    // const validEmail = (email) =>{
    //     if (email.includes('@')){
    //         setEmail
    //     }
    // }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/users/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"name": name, "username": username, "email": email, "profileImageUrl": profileImage, "coverImageUrl":coverImage }),
          })
          .then(response => response.json())
          .then(json =>{console.log(json)})
         
        }
    
        function onChangeName(e){
            if(e.target.value.length<2){
               setValidName(false);

            } else{
                setValidName(true);
            }
                setName(e.target.value)
        }
        function onChangeUsername(e){
            if(e.target.value.length<2){
               setValidUsername(false);

            } else{
                setValidUsername(true);
            
                setUsername(e.target.value)}
        }
        function onChangeEmail(e){
            if(e.target.value.includes("@")){
               setValidEmail(false);

            } else{
                setValidEmail(true);
            
                setEmail(e.target.value)}
        }

    return <div className="createUserContainer">
            <form>
    <label>
        Name:
        <input type="text" value={name} onChange={onChangeName} required></input>
        <div className={validName?"disappear":"white"} > Name needs at least 2 characters</div>
    </label>
    <label>
        Username:
        <input type="text" value={username} onChange={onChangeUsername} required></input>
        <div className={validUsername?"disappear":"white"} > Username needs at least 2 characters</div>
    </label>
    <label>
        Email:
        <input type="email" value={email} onChange={onChangeEmail} required></input>
        <div className={validEmail?"disappear":"white"} > Enter a valid email address</div>
    </label>
    <label>
        Profile Image Url:
        <input type="url" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} required></input>
    </label>
    <label>
        Cover Image Url:
        <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required></input>
    </label>
    <button className="submit" onClick={handleSubmit}>Submit</button>
        </form>
         </div>
    
}



export {CreateUser}

