import React from 'react';
import {useState, useEffect} from 'react';
import WorkPerformance from './WorkPerformance';
import WorkPerformanceForm from './WorkPerformanceForm';
import WorkPerformanceGraph from './WorkPerformanceGraph';
import { Link } from 'react-router-dom';
import './UserRecords.css';

function UserEdit() {

  const [userWorkPerformance, setUserWorkPerformance] = useState([]) 
  const [user, setUser] = useState([]) 
  var urlParts = window.location.href.split('/')
  var userId = urlParts[urlParts.length - 1]

  useEffect(() => {
   getUser()
   updateUserWorkPerformanceList()
  }, [])

  const updateUserWorkPerformanceList = () => {
    console.log("http://localhost:9000/work-performance/user/" + userId)
    fetch("http://localhost:9000/work-performance/user/" + userId )
    .then(res => res.json())
    .then(res => {
      console.log("res")
      console.log(res)
      setUserWorkPerformance(res)
    })    
  };

  const getUser = () => {
    fetch("http://localhost:9000/user/get/" + userId )
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUser(res)
    })    
  };  

  return (
    <div className="container">
      <h1>{user.username} </h1>
      <Link to={'/user/edit/' + user._id}>Edit</Link>
      <h1>Add Work Performance</h1>
      <WorkPerformanceForm  user={user} updateUserWorkPerformanceList={updateUserWorkPerformanceList} />  
      <h1>Work Performance Records</h1>      
      <WorkPerformance userWorkPerformance={userWorkPerformance} updateUserWorkPerformanceList={updateUserWorkPerformanceList} />    
      <WorkPerformanceGraph userWorkPerformance={userWorkPerformance} />
    </div>
  )      
}

export default UserEdit
