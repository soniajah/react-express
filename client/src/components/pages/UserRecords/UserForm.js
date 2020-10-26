import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserRecords.css'

function UserForm() {
 
  const [user, setUser] = useState([]) 

  var urlParts = window.location.href.split('/')
  var userId = urlParts[urlParts.length - 1]

  useEffect(() => {
    getUser()
   }, [])

  const handleSubmit = e => {
    updateUser()
    e.preventDefault();   
  };  

  const handleChange = e => {
    setUser({username: e.target.value, _id: user._id})
  };
  
  const getUser = () => {
    fetch("http://localhost:9000/user/get/" + userId )
    .then(res => res.json())
    .then(res => {
      setUser(res)
    })    
  };

  const updateUser = () => {
    fetch("http://localhost:9000/user/update",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(user)
    })
    .then(res => {
      console.log(res)
      alert(res.text())
    })
  };

  return (
    <div className="container">
      <h1>{user.username} </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Update User" />
      </form> 
      <Link to={'/user/records/' + user._id}>Records</Link>     
    </div>
  ) 
}

export default UserForm