import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function WorkPerformanceForm({user, updateUserWorkPerformanceList}) {
  const [workPerformance, setworkPerformance] = useState({userId: user._id, 
      date: "01/01/0001", 
      hoursSlept: 0, 
      hoursOnTV: 0,
      workPerformance: 3
  }) 

  const workPerformanceChange = e => {
    const value = e.target.value 
    var name = e.target.name
    setworkPerformance({...workPerformance, [name]: value, userId: user._id});
  }  

  const workPerformanceSubmit = e => {   
    fetch("http://localhost:9000/work-performance/create",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(workPerformance)
    })
    .then(res => {
      console.log(res)
      updateUserWorkPerformanceList()
    })
    e.preventDefault();    
  }

  return (
    <div>
      <Form onSubmit={workPerformanceSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="Date">
            <Form.Label>Date *</Form.Label>
            <Form.Control type="date" name="date" value={workPerformance.date} onChange={workPerformanceChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="hoursSlept">
            <Form.Label>Hours Slept *</Form.Label>
            <Form.Control type="number" name="hoursSlept" value={workPerformance.hoursSlept} onChange={workPerformanceChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="Date">
            <Form.Label>Hours Spent on TV *</Form.Label>
            <Form.Control type="number" name="hoursSpentOnTV" value={workPerformance.horsSpentOnTV} onChange={workPerformanceChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="hoursSlept">
            <Form.Label>Work Performance *</Form.Label>
            <Form.Control as="select" name="workPerformance" value={workPerformance.workPerformance} onChange={workPerformanceChange}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>              
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>      
    </div>
  )
}

export default WorkPerformanceForm
