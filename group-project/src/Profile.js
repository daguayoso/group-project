import React, { useState } from 'react'


function Profile() {
    const [name, setName] = useState('')
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [city, setCity]=useState('')
    const [zipCode, setZipcode]=useState('')
    const [state, setState] = useState('')

    const handleSelectChange = (event) => {
      setState(event.target.value)
    }

   
 
 
  return (
    <div className = "App">
        <h1>Profile Information</h1>
        <label>Name: </label>
        <input
            type ='text'
            value = {name}
            onChange={(event) => setName(event.target.value)}
            maxlength = "100"
            />

        <div></div>

        <label>Address:</label>
        <input
            type ='text'
            value = {Address1}
            onChange={(event) => setAddress1(event.target.value)}
            maxlength = "100"
            />
        <div></div>


        <label>Address 2:</label>
        <input
            type ='text'
            value = {Address2}
            onChange={(event) => setAddress2(event.target.value)}
            maxlength = "100"
            />
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
        <label id="state">Select an option:</label>
      <select id="state" value={state} onChange={handleSelectChange}>
        <option value="">--Please choose an option--</option>
        <option value="option1">ALABAMA</option>
        <option value="option2">ALASKA</option>
        <option value="option3">AMERICAN SAMOA</option>
        <option value="option4">ARIZONA</option>
        <option value="option5">ARKANSAS</option>
        <option value="option6">CALIFORNIA</option>
        <option value="option7">DISTRICT OF COLUMBIA</option>
        <option value="option8">FEDERAL STATES OF MICRONESIA</option>
        <option value="option9">FLORIDA</option>
        <option value="option10">GEORGIA</option>
        <option value="option11">HAWAII</option>
        <option value="option12">IDAHO</option>
        <option value="option13">ILLINOIS</option>
        <option value="option14">INDIANA</option>
        <option value="option15">IOWA</option>
        <option value="option16">KANSAS</option>
        <option value="option17">KENTUCKY</option>
        <option value="option18">LOUISIANA</option>
        <option value="option19">MAINE</option>
        <option value="option20">MARYLAND</option>
        <option value="option21">MASSACHUSETTS</option>
        <option value="option22">MICHIGAN</option>
        <option value="option23">MINNESOTA</option>
        <option value="option24">MISSISSIPPI</option>
        <option value="option25">MISSOURI</option>
        <option value="option26">MONTANA</option>
        <option value="option27">NEBRASKA</option>
        <option value="option28">NEVADA</option>
        <option value="option29">NEW HAMPSHIRE</option>
        <option value="option30">NEW JERSEY</option>
        <option value="option31">NEW MEXICO</option>
        <option value="option32">NEW YORK</option>
        <option value="option33">NORTH CAROLINA</option>
        <option value="option34">NORTH DAKOTA</option>
        <option value="option35">OHIO</option>
        <option value="option36">OKLAHOMA</option>
        <option value="option37">OREGON</option>
        <option value="option38">PENNSYLVANIA</option>
        <option value="option39">RHODE ISLAND</option>
        <option value="option40">SOUTH CAROLINA</option>
        <option value="option41">TENNESSEE</option>
        <option value="option42">TEXAS</option>
        <option value="option43">UTAH</option>
        <option value="option44">VERMONT</option>
        <option value="option45">VIRGINIA</option>
        <option value="option46">WASHINGTON</option>
        <option value="option47">WEST VIRGINIA</option>
        <option value="option48">WISCONSIN</option>
        <option value="option49">WYOMING</option>
        <option value="option50">OTHER</option>



      </select>
    </div>
  )
}


export default Profile 