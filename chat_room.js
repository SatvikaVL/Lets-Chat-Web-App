// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB0mWqGGVtWTvIYRawg5IunQnBRJ2rV3lU",
    authDomain: "let-s-chat-web-app-47a01.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-47a01-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-47a01",
    storageBucket: "let-s-chat-web-app-47a01.appspot.com",
    messagingSenderId: "843947927628",
    appId: "1:843947927628:web:da627a8c1a864fbdd4ece9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "chat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "chat.html";
}
