  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTPTTN2Nq9TxXGaUr70INn4b9jVdMBqFc",
    authDomain: "smarthome-gr11.firebaseapp.com",
    databaseURL: "https://smarthome-gr11-default-rtdb.firebaseio.com",
    projectId: "smarthome-gr11",
    storageBucket: "smarthome-gr11.appspot.com",
    messagingSenderId: "352106740826",
    appId: "1:352106740826:web:883c4028bb69142d6d2c63",
    measurementId: "G-J2NJ9VCBZX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import { getDatabase, ref, child, get, update}
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js"