import React from 'react';
import {useState, useEffect} from 'react';
import WorkPerformance from './WorkPerformance';
import WorkPerformanceForm from './WorkPerformanceForm';
import WorkPerformanceGraph from './WorkPerformanceGraph';
import './UserRecords.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function UserRecords() {

  const [userWorkPerformance, setUserWorkPerformance] = useState([]) 
  const [user, setUser] = useState([]) 
  var urlParts = window.location.href.split('/')
  var userId = urlParts[urlParts.length - 1] 

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
  
  useEffect(() => {
    getUser()
    updateUserWorkPerformanceList()
   }, [])

  return (
    <div className="container">
      <div className="m-5">
        <h3>{user.username} </h3>
        <Button href={'/user/edit/' + user._id} className='float-right btn-info'>Edit User</Button>
      </div>
      <div className="m-5">
        <h3 className="mb-3">Add Work Performance</h3>
        <WorkPerformanceForm  user={user} updateUserWorkPerformanceList={updateUserWorkPerformanceList} />  
      </div>    
      <div className="m-5">
        <h3 className="mb-3">Work Performance Records</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Hours Slept</th>
              <th>Hours Spent on TV</th>
              <th>Work Performance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <WorkPerformance userWorkPerformance={userWorkPerformance} updateUserWorkPerformanceList={updateUserWorkPerformanceList} />          
          </tbody>
        </Table>
      </div>
      <div className="m-5">
        <h3 className="mb-3">Work Performance Records in Grpah</h3>
        <WorkPerformanceGraph userWorkPerformance={userWorkPerformance} />
      </div>      
    </div>
  )      
}

export default UserRecords
