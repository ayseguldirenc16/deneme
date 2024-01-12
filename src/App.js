import './App.css'
import Header from './component/Header/Header'
import React from "react";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';


function App(){
return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact>
            <About/>
        </Route>
      </Switch>
      </Router>
    </>
  )
}

export default App