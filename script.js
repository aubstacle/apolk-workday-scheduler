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
//DOM elements
var dayEl = $("#currentDay");
var timeEl = $("#currentTime");

//Show today's date using moment
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
