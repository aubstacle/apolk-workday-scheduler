//Create an array of all the time slots in your work day
var timeArray = [
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12am",
  "1am",
  "2am",
  "3am",
];

// corresponding elements for the date and time in header
var dayEl = $("#currentDay");
var timeEl = $("#currentTime");

//Show today's date in the header using moment
var currentDate = m.format("dddd MMMM Do");
dayEl.text("Today is " + currentDate);
currentTime = m.format("LTS");
timeEl.text(currentTime);

//Show live clock using moment
setInterval(function () {
  var m = moment(); // had to redefinte moment variable inside setInterval function in order to show live time
  var clock = m.format("h:mm:ss A");
  timeEl.text(clock);
}, 1000);


// Dynamically create the new time blocks for each hour
for (var i = 0; i < timeArray.length; i++); {
    var createdRow = $("<div class='row time-block'>");
    var hour = $("<div class='col-sm-1 hour'>");
    var descriptionInput = $("<textarea class='col-sm-10 description'>");
    
}
