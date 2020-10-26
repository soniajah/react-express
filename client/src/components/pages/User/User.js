import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';


function User({users, updateUserList}) {

  const handleClick = e => {
    fetch("http://localhost:9000/user/delete",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({id: e.target.value})
    })
    .then(res => {
      updateUserList()
    })
    e.preventDefault();
  }

  return users.map((user, index) =>   (
    <div key={index} className='user-row'>
      {user.username}
      <Link to={'/user/records/' + user._id}>Records</Link>
      <button value={user._id} onClick={handleClick} >Delete</button>
    </div>
    )   
  )  
}

export default User
