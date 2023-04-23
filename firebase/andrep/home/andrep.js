var config = {
    apiKey: "AIzaSyAYx32jmuvgmRHmY795BxpdSfq1AYC4Z4I",
    authDomain: "andrep-id.firebaseapp.com",
    databaseURL: "https://andrep-id-default-rtdb.firebaseio.com",
    projectId: "andrep-id",
    storageBucket: "andrep-id.appspot.com",
    messagingSenderId: "901866141368",
    appId: "1:901866141368:web:0beedf714b54d13e8e264d",
    measurementId: "G-TFKQP4C41V"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

var connectionsRef = database.ref("/andrep Home");
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function (snap) {

    // If they are connected..
    if (snap.val()) {

        // Add user to the connections list.
        var con = connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
    }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function (snap) {

    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#andrep-home").text(snap.numChildren());
});