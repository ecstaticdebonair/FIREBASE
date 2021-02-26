// Initialize Firebase



 var firebaseConfig = {
    apiKey: "AIzaSyB5x9ic9osuUXxI7jqyeCZQbf6LvsC4csw",
    authDomain: "akshay-first-project-e992f.firebaseapp.com",
    databaseURL: "https://akshay-first-project-e992f.firebaseio.com",
    projectId: "akshay-first-project-e992f",
    storageBucket: "akshay-first-project-e992f.appspot.com",
    messagingSenderId: "265572580750",
    appId: "1:265572580750:web:553758e8d951387ec6b8df",
    measurementId: "G-0708FQF3ET"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  var cool = data + " krishna " ;
  dataRef.set({
    value: cool 
  });
}

function setData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/setData');
  console.log(data)
  dataRef.set({
    value: data
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});