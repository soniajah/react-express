import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function User({users, updateUserList}) {

  const deleteUser = e => {
    fetch("http://localhost:9000/user/delete",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({id: e.target.value})
    })
    .then( res => { 
      console.log(res)
      updateUserList()
    })
  };

  return users.map((user, index) =>   (
    <div key={index} className='user-row'>
      
      <Link to={'/user/records/' + user._id}>{user.username}</Link>
      <Button variant="secondary" onClick={deleteUser} value={user._id}>
        Delete
      </Button>
    </div>
    )   
  )  
}

export default User
