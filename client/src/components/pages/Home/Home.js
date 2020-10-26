import React from 'react';
import {useState, useEffect} from 'react';
import User from '../User/User';
import CreateUserForm from '../CreateUser/CreateUserForm';
import './Home.css';

function Home() {

  const [users, setUsers] = useState([]) 
  
  useEffect(() => {
   updateUserList()
  }, [])
 
  const updateUserList = () => {
    fetch("http://localhost:9000/users")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUsers(res)
    })    
  };

  return (
    <div className="container">
      <CreateUserForm  updateUserList={updateUserList} />         
      <User users={users} updateUserList={updateUserList} />    
    </div>
  )      
}


export default Home
