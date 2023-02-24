import React, { useState } from 'react'


function Profile() {
    const [city, setCity]=useState('')
    const [zipCode, setZipcode]=useState('')
    const [state, setState]=useState('')

   
 
 
  return (
    <div className = "App">
        <h1>Profile Information</h1>
        <label>Name: </label>

        <div></div>

        <label>Address:</label>
        <div></div>

        <label>Address 2:</label>

        <div></div>

        <label>City:</label>
        <input
            type ='text'
            value = {city}
            onChange={(event) => setCity(event.target.value)}
            maxlength = "100"
            />

        <div></div>

        

        <label>Zipcode:</label>
        <input type='number'
            value={zipCode}
            required
            onChange={(event) => setZipcode(event.target.value)}
            minlength="5"
            maxlength="9"
            />
        <div></div>

        <label>State:</label>
        <input type ='text'
            value = {state}
            onChange={(event) => setState(event.target.value)}
            maxlength = "2"
            />
    </div>
  )
}


export default Profile 