import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// });

// database
//   .ref('location')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log(e));

// database
//   .ref()
//   .set({
//     name: 'jhony maurad',
//     age: 34,
//     job: {
//       title: 'Software developer',
//       company: 'United States'
//     },
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//       city: 'New York',
//       country: 'USA'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.error('This failed. ', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('deleted');
//   })
//   .catch(e => console.error(e));
