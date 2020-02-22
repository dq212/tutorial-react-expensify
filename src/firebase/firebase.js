import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDYZUrTmr2YFPqgC6UMSFjj5zo3Cc5a5h4",
    authDomain: "expensify-99d02.firebaseapp.com",
    databaseURL: "https://expensify-99d02.firebaseio.com",
    projectId: "expensify-99d02",
    storageBucket: "expensify-99d02.appspot.com",
    messagingSenderId: "880890237592",
    appId: "1:880890237592:web:c895d848bd44efb12f36ed",
    measurementId: "G-XM9TXWJ7JT"
  };

  firebase.initializeApp(config);

  const db = firebase.database();

  firebase.database().ref().set({
      name: 'dq',
      age:26,
      isSingle:false,
      location:{
          city:"New York",
          country:"USA"
      }
  })

  db.ref('age').set(46);
  db.ref('location/city').set('NY');

  db.ref('attributes').set({
      height:145,
      weight: 73
  });

// db.ref().set('hello')


