import './App.css'
import Header from './component/Header/Header'
import React from "react";
import Pages from'./pages/Pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





function App() {

  return (
    <>
      <Router>
      <Header/>
      <Switch>
        <Route path='/' exact>
            <Pages/>
        </Route>
      </Switch>
      </Router>

    
    
    </>
  )
}

export default App
