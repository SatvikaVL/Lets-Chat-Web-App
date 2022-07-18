username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome " + username + "!" ;

function addRoom(){
    room_name = document.getElementById("add_roomname").value;
    localStorage.setItem("room_name" , room_name);

    firebase.database().ref("/").child(room_name).update({
        room_name : room_name
    });
    window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function (snapshot) {document.getElementById("output").innerHTML = 
""; snapshot.forEach(function(childSnapshot) {childKey = 
childSnapshot.key; 
    Room_names = childKey; 
    //Start code
      console.log("Room Name" + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 
    //End code 
    }); }); }
getData();
function redirectToRoomName(){
    localStorage.setItem("room_name" , room_name);
    window.location = "chat_page.html";
}