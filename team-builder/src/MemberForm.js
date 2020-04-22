import React from 'react'

function MemberForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form className='member container'>
      <h2>Member Form</h2>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>name:&nbsp;
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
          // very similar to inputs of type text
          value={values.role}
          onChange={onInputChange}
          name='role'
        >
          <option value='Tank'>Tank</option>
          <option value='Healer'>Healer</option>
          <option value='Damage'>Damage</option>
          <option value='Control'>Control</option>
        </select></label>

        <button onClick={onSubmit}>submit</button>
    </form>
  )
}

export default MemberForm
