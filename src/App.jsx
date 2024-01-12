import './App.css'
import Header from './component/Header/Header'
import React from "react";
import Pages from'./pages/Pages'
import { Route, BrowserRouter as Router  } from 'react-router-dom';
import { Switch } from 'react-router-dom';




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

    {/* <Header/>
    <Pages/> */}
    
    
    </>
  )
}

export default App
