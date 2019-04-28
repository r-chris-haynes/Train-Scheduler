
var config = {
    apiKey: "AIzaSyAp1KoFcQf0CIPtojLuuQx-Aq643gmdRHs",
    authDomain: "firstproject-25df9.firebaseapp.com",
    databaseURL: "https://firstproject-25df9.firebaseio.com",
    projectId: "firstproject-25df9",
    storageBucket: "firstproject-25df9.appspot.com",
    messagingSenderId: "162956076124"
};
firebase.initializeApp(config);

var database = firebase.database();

$("button").on("click", function (event) {
    event.preventDefault();

    var trainNameInput = $("#trainInput").val().trim();
    var destinationInput = $("#destinationInput").val().trim();
    var firstTrainTime = $("#timeInput").val().trim();
    var frequencyTime = $("#frequencyInput").val().trim();

    var newTrip = {
        trainName: trainNameInput,
        destination: destinationInput,
        firstTrain: firstTrainTime,
        frequency: frequencyTime,
    };

    database.ref().push(newTrip);

    $("#trainInput").val("");
    $("#destinationInput").val("");
    $("#timeInput").val("");
    $("#frequencyInput").val("");
});

database.ref().on("child_added", function(childSnapShot) {
    var trainName = childSnapShot.val().trainName;
    var destination = childSnapShot.val().destination;
    var firstTrain = childSnapShot.val().firstTrain;
    
    var frequency = childSnapShot.val().frequency;

    // use momentjs to solve time issues
    var nextArrival = "";
    var minutesAway = "";
    var currentTime = moment();

// 
    $("#add-train").prepend("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway);

})



 