import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Projects from "./components/Projects";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
function App() {
  return (
<Router>
<Route exact path='/tasks' component={Tasks}/>
<Route exact path='/projects' component={Projects}/>
<Route exact path='/login' component={Login}/>
</Router>
  );
}

export default App;
