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
      if(Notification.permission=='granted'){
        messaging.getToken().then((token)=>
        {
          console.log("Stored following token", token);
          dbUsers.child(userid).child('token').set(token)
          dbUsers.child(userid).child("seentoken").set(true);

        }
        ).catch(err=>console.log(err));
        // window.location.assign(`https://pure-harbor-26317.herokuapp.com/dating/home/${userid}/${access_token}/${refresh_token}`)
      }
      messaging.requestPermission()
      .then(function () {
        console.log('have permission');
        return messaging.getToken()
      })
      .then(function (token) {
        console.log("Stored following token", token);
        dbUsers.child(userid).child('token').set(token)
        // window.location.assign(`https://pure-harbor-26317.herokuapp.com/dating/home/${userid}/${access_token}/${refresh_token}`)
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
                {/* Edit <code>src/App.js</code> and save to reload. */}
                Please allow notifications, so you can know when someone chats with you!
              </p>
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
            </header>
          </div>
        );
      }
      
      export default RegisterNotification;
      