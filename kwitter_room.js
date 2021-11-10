
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCvFDNAI2oTAj69aSKx-pbv6XkTEflwY7E",
      authDomain: "kwitter-app-ca84d.firebaseapp.com",
      databaseURL: "https://kwitter-app-ca84d-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-ca84d",
      storageBucket: "kwitter-app-ca84d.appspot.com",
      messagingSenderId: "412678214768",
      appId: "1:412678214768:web:4ed0af969281d19681d0b5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom()
          {
                room_name= document.getElementById("room_name").value;
                firebase.database().ref("/").child(room_name).update({
                      purpose:"adding room name"
                });
                localStorage.setItem("room_name",room_name);
                window.location="kwitter_page.html";

          }
          function logout()
          {
                localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                window.location="index.html";
          }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
