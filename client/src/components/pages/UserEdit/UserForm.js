import {React, useState} from 'react';

function UserForm(props) {
  const [formInputs, setFormInputs] = useState([{name: props.user.username}])
  console.log("userForm")
  console.log(props) 

  const handleSubmit = e => {
    console.log(e.target.value, props.user.id)
    props.updateUser(e.target.value, props.user.id)
    e.preventDefault();   
  };  

  const handleChange = e => {
    console.log(e.target.value, props.user.id)
    setFormInputs({name: e.target.value})

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Update User" />
      </form>
      
    </div>
  )
}

export default UserForm