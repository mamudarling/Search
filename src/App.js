import React from 'react'
import Menu from './Menu'
import About from './About'
import Service from './Service'
import Search from './Search'
import Contact from './Contact'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'

const App = () =>{
return(
  <Router>
    <Menu/>
    <Switch>
      <Route exact path='/' component={()=><Search name='Search'/>}/>
      {/* <Route exact path='/service' render={()=><Service name='Service'/>}/> */}
      {/* <Route exact path='/search' component={Search}/> */}
      {/* <Route exact path='/' component={()=><About name='About'/>}/> */}
    </Switch>
  </Router>
)
}

export default App