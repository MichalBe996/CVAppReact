import React, { useState } from "react";


const editButton = () => {
    document.getElementById("personalForm").style.display = "block";
    document.getElementById("personalList").style.display = "none";
}



const PersonalAndExperience = () => {
    const [enteredName, setName] = useState('');
    const [enteredLastName, setLastName] = useState('');
    const [enteredAdress, setAdress] = useState('');
    const [enteredCity, setCity] = useState('');
    const [enteredZipCode, setZipCode] = useState('');
    const [enteredPhoneNumber, setPhoneNumber] = useState('');
    const [enteredBirthday, setBirthday] = useState('');
    const [enteredJob, setJob] = useState('');
    const jobChangeHandler = (event) => {
        setJob(event.target.value)
    }

    
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const adressChangeHandler = (event) => {
    setAdress(event.target.value);
  };
  
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const zipCodeChangeHandler = (event) => {
    setZipCode(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const birthDayChangeHandler = (event) => {
    setBirthday(event.target.value);
  };
  const submitPersonalHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
        setName('');
        setLastName('');
        setAdress('');
        setCity('');
        setZipCode('');
        setPhoneNumber('');
        setBirthday('');
        document.getElementById("nameItem").textContent = `Name: ${enteredName} ${enteredLastName}`;
        document.getElementById("adressItem").textContent = `Adress: ${enteredAdress}`;
        document.getElementById("cityItem").textContent = `City: ${enteredCity}`;
        document.getElementById("zipItem").textContent = `Zip-code: ${enteredZipCode}`;
        document.getElementById("phoneItem").textContent = `Contact number: ${enteredPhoneNumber}`;
        document.getElementById("birthItem").textContent = `Born: ${enteredBirthday}`;
        

        
        
        
    document.getElementById("personalForm").style.display = "none";
    document.getElementById("personalList").style.display = "block";
    return alert('Name: '+enteredName+'Last name:'+ enteredLastName +'Adress:'+enteredAdress + "City:" + enteredCity 
    + "Zip Code:" + enteredZipCode + "Phone Number:" + enteredPhoneNumber + "Date of birth:" + enteredBirthday)



  };
  const addExperience = (event) => {
        event.preventDefault();
        setJob("");
        const element = document.createElement("li");
        element.innerHTML = `${enteredJob}`
        document.getElementById("jobList").appendChild(element);

  }

    return(
        <div className="personalAndExperience">
            
            <div className="personal" id="personal">
                <h1>Personal information</h1>
                <form onSubmit={submitPersonalHandler} id="personalForm">
                    <label for="name">Name:</label>
                    <input type="text" 
                    id="name" 
                    name="name"
                    value={enteredName} 
                    placeholder="Name"
                    onChange={nameChangeHandler}></input>
                    <label for="surname">Last name:</label>
                    <input type="text"
                    id="surname"
                    name="lastname"
                    value={enteredLastName}
                    placeholder="Last Name"
                    onChange={lastNameChangeHandler}></input>
                    <br></br>
                    <br></br>
                    <label for="adress">Adress:</label>
                    <input type="text" 
                    id="adress" 
                    name="adress"
                    value={enteredAdress}
                    placeholder="Adress"
                    onChange={adressChangeHandler}></input>
                    <label for="city">City:</label>
                    <input type="text" 
                    id="city" 
                    name="city"
                    value={enteredCity}
                    placeholder="City"
                    onChange={cityChangeHandler}></input>
                    <br></br>
                    <br></br>
                    <label for="zipcode">Zip/Postal Code:</label>
                    <input id="zip"
                    name="zicpde" 
                    value={enteredZipCode}
                    type="text"  
                    placeholder="Zip Code" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                    onChange={zipCodeChangeHandler}></input>
                    <label for="phoneNumber">Phone number:</label>
                    <input type="tel" 
                    id="phoneNumber" 
                    name="phonenumber"
                    value={enteredPhoneNumber} 
                    placeholder="Phone number"
                    onChange={phoneNumberChangeHandler}></input>
                    <br></br>
                    <br></br>
                    <label for="dayOfBirth">Born in:</label>
                    <input type="date" 
                    id="dayOfBirth" 
                    name="birthday"
                    value={enteredBirthday} 
                    placeholder="dayOfBirth"
                    onChange={birthDayChangeHandler}></input>
                    <br></br>
                    <button type="submit" className="submitPersonal">Submit</button>
                    
                </form>
                
                
            </div>
            <div id="personalList">
                    <ul>
                        <li id="nameItem"></li>
                        <li id="adressItem"></li>
                        <li id="cityItem"></li>
                        <li id="zipItem"></li>
                        <li id="phoneItem"></li>
                        <li id="birthItem"></li>
                    </ul>
                    <button id="editButton" className="editButton" 
                    onClick={function(){
                        editButton()
                    }}>Edit</button>
                </div>
            <div className="experience">
                <h1>Working experience</h1>
                <ul id="jobList" className="jobList">

                </ul>
                <form id="experienceForm" onSubmit={addExperience}>
                    <label for="previousJob">Working experience and year: </label>
                    <input type="text" value={enteredJob} onChange={jobChangeHandler}></input>
                    <br></br>
                    <button type="submit" className="submitExp"> Add </button>
                </form>
            </div>
        </div>
    )
}


export default PersonalAndExperience;