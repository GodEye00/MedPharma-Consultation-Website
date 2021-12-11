import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Home from "./components/General-Home/Final-General-Home/final-general-home"
import User from "./components/User-Home/call-user"
import Admin from "./components/Admin-Home/final-admin-accordion/final-admin-accordion"
import NotFound from "./Javascripts/page-NotFound"
import login from "./components/Buttons/loginForm"
import sign_up from "./components/Form/sign-up-forms"
import Header from "./components/General-Home/NavBar/header/header-link"
import Nurse from "./components/Nurse-Home/final-admin-accordion/final-admin-accordion"
import AdminAccountCreate from "./components/Form/AdminAccount"
import AdminLoginFroms from "./components/Buttons/admin-loginForms"


import "./App.css"

const TITLE = "Medpharma Consultation"

class App extends React.Component {

  componentDidMount() {
    document.title = "Medpharma Consultation"
  }

  
  render() {

  return (

    <>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>

    <div className="App">

    <Router>
    
    <Link to="/"><Header /></Link>
    
    <Switch>
         <Route path="/home" exact component={Home} /> 
         <Route path="/home/user" exact component={User} /> 
         <Route path="/home/admin" exact component={Admin} /> 
         <Route path="/home/admin-login/nurse" excat component ={Nurse} />
         <Route path="/home/login" exact component={login} /> 
         <Route path="/home/sign-up" exact component={sign_up} />
         <Route path="/home/admin-login" exact component={AdminLoginFroms} />  
         <Route path="/home/admin-sign-up" exact component= {AdminAccountCreate} /> 
         <Route exact path="/">
           <Redirect to="/home" />
         </Route>
         <Route component={NotFound} />
  
    </Switch>

    </Router>

        </div>

        </>
  ) 



  }


}




export default App
