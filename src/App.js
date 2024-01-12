import './App.css'
import Header from './component/Header/Header'
import React from "react";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Pages from './pages/Pages';


function App(){
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