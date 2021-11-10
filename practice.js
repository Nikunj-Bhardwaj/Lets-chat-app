
//ADD YOUR FIREBASE LINK
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

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"   });
}