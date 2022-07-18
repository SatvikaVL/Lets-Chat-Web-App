// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAW9JVL2mQzszCxrK41j3sgvDkHKAM3qqM",
    authDomain: "lets-chat-web-app-db.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-db-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-db",
    storageBucket: "lets-chat-web-app-db.appspot.com",
    messagingSenderId: "186220052518",
    appId: "1:186220052518:web:e1b365e1de945de30da6e7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



