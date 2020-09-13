// // corresponding elements for the date and time in header

// $(document).ready(function () {
//   var timeList = ["07", "08", "09", "10", "11", "12", "01", "02", "03"];

//   var dayEl = $("#currentDay");
//   var timeEl = $("#currentTime");

//   //Show today's date in the header using moment
//   var m = moment();
//   var currentDate = m.format("dddd MMMM Do");
//   dayEl.text("Today is " + currentDate);
//   currentTime = m.format("LTS");
//   timeEl.text(currentTime);

//   //Show live clock using moment
// setInterval(function () {
//   var m = moment(); // had to redefinte moment variable inside setInterval function in order to show live time
//   var clock = m.format("h:mm:ss A");
//   timeEl.text(clock);
// }, 1000);

//   for (var i = 0; i < timeList.length; i++);
//   {
//     console.log(timeList[i]);
//   }

$(document).ready(function () {
  var dayEl = $("#currentDay");
  var timeEl = $("#currentTime");

  //Show today's date in the header using moment
  var currentDate = moment().format("dddd MMMM Do");
  dayEl.text("Today is " + currentDate);
  currentTime = moment().format("LTS");
  timeEl.text(currentTime);

  setInterval(function () {
    var clock = moment().format("h:mm:ss A");
    timeEl.text(clock);
  }, 1000);

  var timeList = ["23", "00", "01", "02", "03", "04", "05", "06", "07"];

  for (var i = 0; i < timeList.length; i++) {
    //create new rows to hold hour, text input and save button columns
    var addRow = $("<div class='row time-block'>");

    var hourBox = $("<div class='col-sm-1 hour'>").text(timeList[i] + ":00");

    var textInput = $("<textarea class='col-sm-10 description'>").attr(
      "placeholder",
      "Enter description"
    );

    var saveButton = $("<button class='col-sm-1 saveBtn'>").text("Save!");

    addRow.append(hourBox, textInput, saveButton);
    $(".container").append(addRow);

    //use moment.js to assign past, present or future lasses to each row depending on current time
    if (timeList[i] < moment().format("HH")) {
      addRow.addClass("past");
    } else if (timeList[i] > moment().format("HH")) {
      addRow.addClass("future");
    } else {
      addRow.addClass("present");
    }
  }
});
