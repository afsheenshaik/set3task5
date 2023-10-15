import "../../src/App.css"
import React,{useState} from'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function AgeCalculator() {
    const[birthdate,setBirthdate]=useState('');
    const[age,setAge]=useState(0);
    const calculateAge=()=>{
        const today=new Date();
        const birthdayDate=new Date(birthdate);
        let age=today.getFullYear()-birthdayDate.getFullYear();
        const monthDiff=today.getMonth()-birthdayDate.getMonth();
        if(monthDiff<0||(monthDiff===0&&today.getDate()<birthdayDate.getDate())){
            age--;
        }
        setAge(age);
    };
    return(
        <div class="container">
            <h1>Age Calculator</h1>
            <h3>Enter your date of birth</h3>
            <input type="date" placeholder="DD-MM-YYYY" value={birthdate} onChange={e=>setBirthdate(e.target.value)}/>
            <div>
            <button type="submit" onClick={calculateAge} class="btn btn-primary">Calculate Age</button>
            </div>
            <h2>You are {age} years old</h2>
        </div>
    )
}
