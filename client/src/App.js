import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserEdit from './components/pages/UserEdit/UserEdit';

function App() {  
  return (
    <div>      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={UserEdit} />
        </Switch>                
      </Router> 
      <Footer /> 
    </div>
  );
}
export default App;
