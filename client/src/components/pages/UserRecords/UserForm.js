import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserRecords.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function UserForm() {
 
  const [user, setUser] = useState([]) 

  var urlParts = window.location.href.split('/')
  var userId = urlParts[urlParts.length - 1]

  
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

  useEffect(() => {
    getUser()
   }, [])

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
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Name
            </Form.Label>
            <Form.Control type="text" value={user.username} onChange={handleChange} />
          </Col>         
          <Col xs="auto">
            <Button variant="dark" type="submit">
              Update User
            </Button>
          </Col>
        </Form.Row>
      </Form> 
      <div className='m-3'>
        <Link to={'/user/records/' + user._id}>Records</Link>
      </div> 
    </div>
  ) 
}

export default UserForm