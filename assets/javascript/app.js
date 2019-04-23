
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAp1KoFcQf0CIPtojLuuQx-Aq643gmdRHs",
    authDomain: "firstproject-25df9.firebaseapp.com",
    databaseURL: "https://firstproject-25df9.firebaseio.com",
    projectId: "firstproject-25df9",
    storageBucket: "firstproject-25df9.appspot.com",
    messagingSenderId: "162956076124"
};
firebase.initializeApp(config);

var db = firebase.database();

$("button").on("click", function (event) {
    event.preventDefault();
    var newTrip = {
        trainNameInput: $("#trainInput").val().trim(),
        destinationInput: $("#destinationInput").val().trim(),
        firstTrainTime: $("#timeInput").val().trim(),
        frequency: $("#frequencyInput").val().trim(),
    }
    db.ref().push(newTrip);
    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#timeInput").val("");
    $("#frequencyInput").val("");

    console.log(newTrip)
})

// db.ref().on("child_added", function (childSnapShot) {
//     var data = childSnapShot.val();
//     var diffTime =    
// })
