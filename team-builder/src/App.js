import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid'
import axios from 'axios'
import './App.css';
import TeamMember from './TeamMember';
import MemberForm from './MemberForm';

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'Griffin McElroy',
    email: 'Dirro@taz.com',
    role: 'DM'
  },
]


const initialFormValues ={
  name: '',
  email: '',
  role: ''
}


function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    axios.get('testurl')
    .then(res => {
      setTeamMembers(res.data)
    })
    .catch (err => {
      console.log(err)
    })
  }, [])


    return (
      <div className='container'>
      <header><h1>Team Builder</h1></header>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
      <MemberForm
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />
      </div>
  );
}

export default App;
