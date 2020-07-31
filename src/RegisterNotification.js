import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {messaging, dbUsers} from './firebase/firebase'
import logo from './logo.svg';
import './App.css';
function RegisterNotification() { 
 const {userid, access_token, refresh_token} =useParams();
 useEffect(handleToken, [userid]);

  function handleToken(){
    console.log("WE AIN't GOT A USER")

    if(userid){

      console.log("WE GOT A USER")
      messaging.requestPermission()
      .then(function () {
        console.log('have permission');
        return messaging.getToken();
      })
      .then(function (token) {
        dbUsers.child(userid).child('token').set(token)
        window.location.assign()
      })
      .catch(function (err) {
        console.log(err);
      })
  
      messaging.onMessage(function (payload) {
      console.log('onmessage', payload);
    })
    }
    
  }

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      }
      
      export default RegisterNotification;
      