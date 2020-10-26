import React from 'react';
import {useState, useEffect} from 'react';


function WorkPerformanceForm({user, updateUserWorkPerformanceList}) {
  const [workPerformance, setworkPerformance] = useState({userId: user._id, 
      date: "01/01/0001", 
      hoursSlept: 0, 
      hoursOnTV: 0,
      workPerformance: 3
  }) 

  // setworkPerformance({userId: props.user._id})
  // console.log(workPerformance)

  const handleChange = e => {
    const value = e.target.value //.replace(/\+|-/ig, '');
    var name = e.target.name
    setworkPerformance({...workPerformance, [name]: value, userId: user._id});
  }  

  // const magic = e => {
  //   setworkPerformance({...workPerformance, hoursSlept: workPerformance.hoursSlept + 1});
  // }

  const handleSubmit = e => {
    // var workPerformance = {
    //   userId: userId, 
    //   date: date, 
    //   hoursSlept: hoursSlept, 
    //   hoursOnTV: hoursOnTV,
    //   workPerformance: workPerformance
    // }    
    console.log(workPerformance)
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
      {/* <button onClick={magic}>hello</button> */}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="userId" value={user._id} />
        <label>
          Date *:
          <input type="date" name="date" value={workPerformance.date} onChange={handleChange} />
        </label>
        <label>
          Hours Slept *:
          <input type="number" name="hoursSlept" value={workPerformance.hoursSlept} onChange={handleChange} />
        </label>
        <label>
          Hours spent on TV *:
          <input type="text" name="hoursSpentOnTV" value={workPerformance.horsSpentOnTV} onChange={handleChange} />
        </label>
        <label>
          Work Performance:
          <input type="number" name="workPerformance" value={workPerformance.workPerformance} onChange={handleChange} />
        </label>
        <input type="submit" value="Create Work Performance" />
      </form>
      
    </div>
  )
}

export default WorkPerformanceForm
