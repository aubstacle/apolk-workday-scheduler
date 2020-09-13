// include everything in a document ready function to ensure the DOM is ready for script
$(document).ready(function () {
  var dayEl = $("#currentDay");
  var timeEl = $("#currentTime");
  var calendar = $(".container");

  //Show today's date and live time in the header using moment
  var currentDate = moment().format("dddd MMMM Do");
  dayEl.text("Today is " + currentDate);

  currentTime = moment().format("LTS");
  timeEl.text(currentTime);

  setInterval(function () {
    var clock = moment().format("h:mm:ss A");
    timeEl.text(clock);
  }, 1000);

  var timeList = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

  for (var i = 0; i < timeList.length; i++) {
    //create new rows to hold hour, text input and save button columns
    var addRow = $("<div class='row'>");

    var hourBox = $("<div class='col-sm-1 hour time-block'>").text(
      timeList[i] + ":00"
    );

    var textInput = $("<textarea class='col-sm-10 description'>").attr(
      "placeholder",
      "Enter event description here..."
    );

    var saveButton = $("<button class='col-sm-1 saveBtn'>").append(
      "<i class='far fa-save' style='font-size:44px'>"
    );

    // adding this id to button & text input variables is necessary when we want to save the text input and time in local storage
    textInput.attr("save-time", timeList[i]);
    saveButton.attr("save-time", timeList[i]);

    // append the columns to the new row & append new row to calendar container
    addRow.append(hourBox, textInput, saveButton);
    calendar.append(addRow);

    // save your text input and corresponding time to local storage by clicking the save button
    // setItem locally stores the provided key (save-time) and value (description)
    $(document).on("click", ".saveBtn", function (store) {
      localStorage.setItem(
        $(this).attr("save-time"),
        $(this).siblings(".description").val()
      );
    });

    //use moment.js to assign past, present or future classes for each row depending on current time (makes textarea red, grey or green)
    currentTime = moment().format("HH");
    if (timeList[i] < currentTime) {
      textInput.addClass("past");
    } else if (timeList[i] > currentTime) {
      textInput.addClass("future");
    } else {
      textInput.addClass("present");
    }
  }
});
