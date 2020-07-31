import React , {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {messaging} from './firebase/firebase'
import {Router, BrowserRouter, Route, Redirect } from  'react-router-dom'
import RegisterNotification from './RegisterNotification'
function App() {
  return(
  <BrowserRouter>

            <Route exact path="/signup/:userid/:access_token/:refresh_token" render={()=> <RegisterNotification />} />
            
  </BrowserRouter>);
}

export default App;
