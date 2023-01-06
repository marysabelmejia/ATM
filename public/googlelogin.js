import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

(function () {
  // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
  const firebaseConfig = {
    apiKey: "AIzaSyDLeksIZJ2sFAdgQylc61XccHyaBCZm43c",
    authDomain: "badbankmm.firebaseapp.com",
    projectId: "badbankmm",
    storageBucket: "badbankmm.appspot.com",
    messagingSenderId: "7239413741",
    appId: "1:7239413741:web:0d350463cfae22cca581e4",
    measurementId: "G-G5NWPNJBZX"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // TODO: initialize provider for google auth
  const provider = new GoogleAuthProvider();

  console.log("app initialized...");

  // get elements
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");

  //Google Login
  googlelogin.addEventListener("click", (e) => {
    console.log("google sign in clicked");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("google user: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  });

  // logout
  logout.addEventListener("click", (e) => {
    auth.signOut();
  });

  // login state
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${firebaseUser.email}`;
      logout.style.display = "inline";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      googlelogin.style.display = "inline";
      logout.style.display = "none";
    }
  });
})();
