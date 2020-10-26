import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserRecords from './components/pages/UserRecords/UserRecords';
import UserForm from './components/pages/UserRecords/UserForm';

function App() {  
  return (
    <div>      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/records" component={UserRecords} />
          <Route path="/user/edit" component={UserForm} />
        </Switch>                
      </Router> 
      <Footer /> 
    </div>
  );
}
export default App;
