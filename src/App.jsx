import React, { useState } from 'react';
import Form from "./components/Form"
import Team from "./components/Team"
import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [members, setMembers] = useState([])
  const [values, setValues] = useState(initialFormValues)


  const onSubmit = () => {
    setMembers([values, ...members])
    setValues(initialFormValues)
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div className="App">
     <Form values={values} change={onChange} submit={onSubmit} /> 
     {
            members.map((user, index) => {
              return (
                <Team key={index} details={user}/>
              )
            })
     }
    </div>
    
  );
}

export default App;
