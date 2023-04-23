// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYx32jmuvgmRHmY795BxpdSfq1AYC4Z4I",
    authDomain: "andrep-id.firebaseapp.com",
    databaseURL: "https://andrep-id-default-rtdb.firebaseio.com",
    projectId: "andrep-id",
    storageBucket: "andrep-id.appspot.com",
    messagingSenderId: "901866141368",
    appId: "1:901866141368:web:0beedf714b54d13e8e264d",
    measurementId: "G-TFKQP4C41V"
  };
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById("img").innerHTML = `
            <img src="${user.photoURL}" style="border-radius: 50px;">
        `;
      document.getElementById("username").innerHTML = `
            ${user.displayName}
        `;
      document.getElementById("email").innerHTML = `
            ${user.email}
        `;
      document.getElementById("verified").innerHTML = `
            ${user.emailVerified}
        `;
      document.getElementById("username-link").innerHTML = `${user.uid}
        `;
      const linkUsername = document.getElementById("username-link");
      const link = document.getElementById("link");
      link.href = link.textContent;

    } else {
      window.location = "/auth/";
    }
  });

  function showUserProfile1() {
    const user = firebase.auth().currentUser;
  
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log(" Provider-specific UID: " + profile.uid);
        console.log(" Name: " + profile.displayName);
        console.log(" Email: " + profile.email);
        console.log(" Photo URL: " + profile.photoURL);
      });
    }
  }
  // Method to send the user verification mail
  function VerificationEmail() {
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        console.log('Email Verification sent! Check your mail box');
        // ...
      });
  }

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        window.location = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  showData();