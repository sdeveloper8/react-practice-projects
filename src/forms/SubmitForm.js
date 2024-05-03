import React, { useState } from 'react'

const SubmitForm = () => {
    const [firstName, setFirstName] = useState("");   
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");

    const onSubmits = (e)=>{
        e.preventDefault();
        setDisplayName(firstName + lastName);
     
    }
    
    const inputEvent = (e)=>{
        setFirstName(e.target.value);
    }
    const inputEventTwo = (e)=>{
        setLastName(e.target.value);
    }  
    return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={onSubmits}>
        <input type='text' placeholder='First Name'
        onChange={inputEvent}
        name='firstname'
        value={firstName}
        />
        <input type='text' placeholder='Last Name'
        onChange={inputEventTwo}
        name='lastname'
        value={lastName}
        />
   

        <button type='submit'>Submit Data</button>
      </form>
      <h3>You submitted: {displayName}</h3>
    </>
  )
}

export default SubmitForm
