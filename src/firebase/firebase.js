import * as firebase from 'firebase';
import moment from 'moment'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(config);

  const db = firebase.database();

  export {firebase, db as default};

//   db.ref('expenses').on('child_removed', (snapshot)=>{
//       console.log('removed item',snapshot.key, snapshot.val())
//   })
//   db.ref('expenses').on('child_changed', (snapshot)=>{
//       console.log('changed item',snapshot.key, snapshot.val())
//   })
//   db.ref('expenses').on('child_added', (snapshot)=>{
//       console.log('added item',snapshot.key, snapshot.val())
//   })

  

//   db.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     //   console.log(snaphsot.val())
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//   });

//   db.ref('expenses').on('value', (snapshot)=>{
//     const expenses = []
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//   })







//   





//   const expenses = [{
//       item:'car',
//       amount:'30000',
//       createdAt:79865432
//   },
//   {
//     item:'rent',
//     amount:'19000',
//     createdAt:234567890
// },
// {
//     item:'coffee',
//     amount:'150',
//     createdAt:132456789754
// }]

// expenses.map((expense)=> {
//     db.ref('expenses').push(expense);
// })




  

//   db.ref('notes/-M0hiUaFQjZ0iBi2kcfm').remove()

//   db.ref('notes').push({
//       title:'course topics',
//       body:'react native, angular'
//   })
  

//   const firebaseNotes = {
//       notes:{
//           faaldjfd:{
//               title:'first  note',
//               body:'a note'
//           }, 
//           jfdadfaf:{
//               title:'lasdk',
//               body:'padif;'
//           }
//       }
//   }

//   const notes =[{
//       id:'12',
//       title:'First note',
//       body: 'This is my note'
//   },
//   {
//     id:'71abc',
//     title:'Another note',
//     body: 'This is my second note'
// }];

// db.ref('notes').set(notes);
  
//   db.ref('job').set({
//         title:'dev',
//         company:'google'
//   })

// db.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })





// const onValueChange = db.ref().on('value', (snapshot)=>{
//       console.log(snapshot.val())
//   }, (e) =>{
//     console.log(e)
//   });

//   setTimeout(() => {
//       db.ref('age').set(20);
//   }, 3500);
//   setTimeout(() => {
//       db.ref().off(onValueChange);
//   },7000);
//   setTimeout(() => {
//       db.ref('age').set(31);
//   }, 10500);

//   db.ref('location/city')
//   .once('value')
//   .then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
//   }).catch((e)=>{
//     console.log(e)
//   })



//   firebase.database().ref().set({
//       name: 'dq',
//       age:26,
//       isSingle:false,
//       location:{
//           city:"New York",
//           country:"USA"
//       }
//   }).then(()=>{
//       console.log('Data is saved')
//   }).catch((err)=>{
//     console.log('This failed', err)
//   })



//   db.ref('age').set(46);
//   db.ref('location/city').set('NY');

//   db.ref('attributes').set({
//       height:145,
//       weight: 73
//   }).then(()=>{
//       console.log('second call worked')
//   }).catch(()=>{
//       console.log('Things didn\'t work')
//   })

// firebase.database().ref().set({
//           name: 'dq',
//           age:26,
//           stressLevel:6,
//           isSingle:false,
//           location:{
//               city:"New York",
//               country:"USA"
//           },
//           job:{
//               title:'dev',
//               company:'google'
//           }
//       })

// // db.ref('isSingle').remove().then(()=>{
// //     console.log('removed')
// // }).catch((err)=>{
// //     console.log('err removing')
// // })

// db.ref('isSingle').set(null);

// db.ref().update({stressLevel:9, 'job/company':'Amazon', 'location/city':'Seattle'});

// db.ref().set('hello')


