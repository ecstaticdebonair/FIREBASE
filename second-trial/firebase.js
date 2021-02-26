 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBikeDn3YEp69LtoUt7TR1ATNhCrU4kljI",
    authDomain: "fir-test1-6ca34.firebaseapp.com",
    databaseURL: "https://fir-test1-6ca34-default-rtdb.firebaseio.com",
    projectId: "fir-test1-6ca34",
    storageBucket: "fir-test1-6ca34.appspot.com",
    messagingSenderId: "910846012201",
    appId: "1:910846012201:web:b931d9abaf139f62a8a538",
    measurementId: "G-GDCJRN4NH9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

console.log("this is done");

  var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});
    
 /*

//var ref = firebase.database().ref('players');

console.log(ref);
console.log("adkann");


var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});

*/

var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}

