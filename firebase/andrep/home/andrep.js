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

var database = firebase.database();
var connectionsRef = database.ref("/andrep Home");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {
    $("#andrep-home").text(snap.numChildren());
});