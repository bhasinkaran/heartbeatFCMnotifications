importScripts('/__/firebase/7.17.1/firebase-app.js');
importScripts('/__/firebase/7.17.1/firebase-messaging.js');
// import config from './configure.js'
const firebaseConfig = {
        apiKey: 'AIzaSyCpM-5_mw366JiwTsC6yaNeuK3leQbQrlI',
        authDomain: "nearify-f2a4a.firebaseapp.com",
        databaseURL: "https://nearify-f2a4a.firebaseio.com",
        projectId: "nearify-f2a4a",
        storageBucket: "nearify-f2a4a.appspot.com",
        messagingSenderId: "442855937718",
        appId: "1:442855937718:web:f1f6b7b42ca928efec3817",
        measurementId: "G-HV3MDELM9K"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
        const title='hello world';
        const options={
                body:payload.data.status
        }
        return self.registration.showNotification(title, options);
})
