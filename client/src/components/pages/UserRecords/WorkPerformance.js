import React from 'react';

function WorkPerformance({userWorkPerformance, updateUserWorkPerformanceList}) {
  
  const deleteEntry = e => {
    fetch("http://localhost:9000/work-performance/delete",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({id: e.target.value})
    })
    .then( res => { 
      console.log(res)
      updateUserWorkPerformanceList()
    })
  }

  return userWorkPerformance.map((record, index) => ( 
    <tr key={index}>
      <td>{record.date.split("T")[0]}</td>
      <td>{record.hoursSlept}</td>
      <td>{record.hoursOnTV}</td>
      <td>{record.workPerformance}</td>
      <td><button onClick={deleteEntry} value={record._id} className='px-2'>X</button></td>
    </tr>
  ))
}

export default WorkPerformance
