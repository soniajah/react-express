import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [testapi, setTestapi] = useState({ apiResponse: "World", showButton: true })

  const getTestApi = () => {
      fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then((res) => {
      setTestapi({ apiResponse: res, showButton: false })
    })    
  }

  let buttonView
  if (testapi.showButton) {
    buttonView = <button onClick={getTestApi}>Click me</button>
  } else {
    buttonView = <p>{testapi.apiResponse}</p>
  }
  return (
    <div className="todo-app">
      <p>Hello</p>
      {buttonView}
    </div>
  );
}
export default App;
