
import React, { useState } from "react";




const Skills = () => {
    const [enteredSkill, setSkill] = useState("");
    const skillChangeHandler = (event) => {
        setSkill(event.target.value);
    };
    const submitSkillHandler = (event) => {
        event.preventDefault();
        setSkill("");
        const element = document.createElement("li");
        
        element.innerHTML = `${enteredSkill}`;
        
        document.getElementById("skillList").appendChild(element);
        
        




        
    
    }
    return(
        <div className="skillset" id="skilset">
            <h1>Skills</h1>
            <ul id="skillList" className="skillList">

                </ul>
                <form id="experienceForm" onSubmit={submitSkillHandler}>
                    <label for="anotherSkill">Skill: </label>
                    <input type="text" value={enteredSkill} onChange={skillChangeHandler}></input>
                    <br></br>
                    <button type="submit" className="submitSkill"> Add </button>
                </form>
        </div>
    )

}


export default Skills;