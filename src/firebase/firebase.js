import firebase from 'firebase/app';
import 'firebase/database';
import apiKey from './api-Key';
import 'firebase/storage'
import 'firebase/messaging'

const firebaseConfig = {
        apiKey: apiKey,
        authDomain: "heartbeat-53205.firebaseapp.com",
        databaseURL: "https://heartbeat-53205.firebaseio.com",
        projectId: "heartbeat-53205",
        storageBucket: "heartbeat-53205.appspot.com",
        messagingSenderId: "1065325778110",
        appId: "1:1065325778110:web:391aa9a182da3f130b3aef",
        measurementId: "G-C7MQE9QDKE"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const messages = firebase.messaging();
// messages.requestPermission()
// .then(function() {
//         console.log('have permission');
//         return messages.getToken();
// })
// .then(function(token){
//         console.log(token);
// })
// .catch(function(err){
//         console.log(err);
// })

// messages.onMessage(function(payload){
//         console.log('onmessage',payload);
// })
export default storage;
export const messaging = messages;
export const dbArtists = firebase.database().ref().child('artists');
export const dbUsers = firebase.database().ref().child('users');
export const dbSongs = firebase.database().ref().child('songs');
export const dbPosts = firebase.database().ref().child('posts');
export const dbMessages = firebase.database().ref().child('messages');
export const dbReplies = firebase.database().ref().child('replies');
export const dbLikes = firebase.database().ref().child('likes');
export const dbChats = firebase.database().ref().child('chats');



