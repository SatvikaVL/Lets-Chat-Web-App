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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



