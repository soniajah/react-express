import React from 'react'
import * as d3 from 'd3'

function WorkPerformance({userWorkPerformance, updateUserWorkPerformanceList}) {
  
  const deleteEntry = e => {
    //
  }

  return userWorkPerformance.map((record, index) => (
    <div>
      {record.date}, {record.hoursSlept}, {record.hoursOnTV}, {record.workPerformance}
      <button onClick={deleteEntry}>X</button>
    </div>
  ))
}

export default WorkPerformance
