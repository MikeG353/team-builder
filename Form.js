import React from 'react'

function MembershipForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form className='member container'>
      <h2>Member Form</h2>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Name:&nbsp;
      <input
          value={values.name}
          onChange={onInputChange}
          name='name'
          type='text'
        /></label>
      <label>Email:&nbsp;
      <input
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>

      {/* ////////// DROPDOWN ////////// */}
      <label>Role:&nbsp;
      <select
          
          value={values.role}
          onChange={onInputChange}
          name='role'
        >
          <option value='Tank'>Tank</option>
          <option value='DPS'>DPS</option>
          <option value='Control'>Control</option>
          <option value='Healer'>Healer</option>

        </select></label>     

      
      <button onClick={onSubmit}>submit</button>
    </form>
  )
}

export default FriendForm
