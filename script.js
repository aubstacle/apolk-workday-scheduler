//Create an array of all the time slots in your work day
var timeArray = [
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
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
    // declare new row with hour, text input and save button columns
    var createRow = $("<div class='row'>");
    var hour = $("<div class='col-sm-1'>");
    var scheduleInput = $("<textarea class='col-sm-10'>");
    var save = $("<button class='col-sm-1 saveBtn'>");
    var calContainer = $(".calContainer");

    scheduleInput.attr("hour", timeArray[i]);
    scheduleInput.attr("placeholder", "Enter your plans here");

    createRow.append(hour, scheduleInput, save);
    calContainer.append(createRow);

    
}
