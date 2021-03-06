var config = {
    apiKey: "AIzaSyAUZkXL7ez4nSyS3hr7Mqoesdqkpr8Hym4",
    authDomain: "train-scheduler-hw-2ee39.firebaseapp.com",
    databaseURL: "https://train-scheduler-hw-2ee39.firebaseio.com",
    projectId: "train-scheduler-hw-2ee39",
    storageBucket: "train-scheduler-hw-2ee39.appspot.com",
    messagingSenderId: "624470769602"
  };

firebase.initializeApp(config);

var database = firebase.database();


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    // storing the user input information in variables
    var inputTrainName = $("#trainName").val().trim();
    var inputDestination = $("#destination").val().trim();
    // format piece makes sure it gets stored in proper format
    var inputFirstTime = moment($("#firstTime").val().trim(),"h:mm").format("LT");
    // input needs to be time in minutes
    var inputFrequency = parseInt($("#frequency").val().trim());

    var newTrain = {
        dataName: inputTrainName,
        dataDest: inputDestination,
        dataBegin: inputFirstTime,
        dataFreq: inputFrequency,
    };

    database.ref().push(newTrain);

    console.log(newTrain.dataName);
    console.log(newTrain.dataDest);
    console.log(newTrain.dataBegin);
    console.log(newTrain.dataFreq);

    // below clears the user input fields after they click submit and their information is pushed into the database
    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTime").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function(childSnap) {
    console.log(childSnap.val());

    inputTrainName = childSnap.val().dataName;
    inputDestination = childSnap.val().dataDest;
    inputFirstTime = childSnap.val().dataBegin;
    inputFrequency = childSnap.val().dataFreq;

    // my time calculations are below using the moment.js library
    var inputFirstTimeConverted = moment(inputFirstTime, "hh:mm");
    var timeDiff = moment().diff(moment(inputFirstTimeConverted), "minutes");
    var timeRem = timeDiff % inputFrequency;
    var timeNextTrain = inputFrequency - timeRem;
    var nextTrainMin = moment().add(timeNextTrain, "minutes");
    nextTrainMin = (nextTrainMin).format("LT");

    console.log(inputTrainName);
    console.log(inputDestination);
    console.log(inputFrequency);
    console.log(timeNextTrain);
    console.log(nextTrainMin);

    //below adds the data to the empty table, appending each new row. this will happen upon user clicking the submit button since we're still inside this function
    var newRow = $(`
    <tr>
        <td>${inputTrainName}</td>
        <td>${inputDestination}</td>
        <td>${inputFrequency}</td>
        <td>${nextTrainMin}</td>
        <td>${timeNextTrain}</td>
    </tr>
    `);
    $("#train-schedule").append(newRow);

}, function(errorObject) {
    console.log("The DB read to page failed: ", errorObject.code);
});