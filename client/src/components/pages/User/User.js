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
      // console.log(res)
      // alert(res.text());
      updateUserList()

    })
    e.preventDefault();
  }

  const updateUser = (newName, userId) => {
    fetch("http://localhost:9000/user/update",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({name: newName, id: userId})
    })
    .then(res => {
      console.log(res)
      alert(res.text())
    })
  }

  return users.map((user, index) =>   (
    <div key={index} className='user-row'>
      {user.username}
      <Link to={'/user/' + user._id} className="">User</Link>
      <button value={user._id} onClick={handleClick} >Delete</button>
    </div>
    )   
  )  
}

export default User
