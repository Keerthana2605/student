import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {


  const [inputString, setInputString] = useState("");

 
  const data = {
    name : '',
    usn : '',
    college : '',
    phoneNumber : '',
    gender : ''
  }

  const [student, setStudent] = useState(data);



  const studentfunction = (e) => {


    const key = e.target.id
    const data2 = student;
    
    data2[key]= e.target.value;
    setStudent(data2);     
  }

  return (
    <div className="App">
    name <input id = "name" onChange = {studentfunction}></input>
    usn <input id = "usn" onChange = {studentfunction}></input>
    college <input id = "college" onChange = {studentfunction}></input>
    gender <input id = "gender" onChange = {studentfunction}></input>
    phoneNumber <input id = "phoneNumber" onChange = {studentfunction}></input>
    
    <br></br>
    <br></br>
    <br></br>

    name : {student.name}<br></br>
    <br></br>
    usn : {student.usn}
    <br></br>
    <br></br>
    college : {student.college}
    <br></br>
    <br></br>
    gender : {student.gender}
    <br></br>
    <br></br>
    phoneNumber : {student.phoneNumber}

    </div>
  );
}


export default App;