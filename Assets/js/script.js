// Select all buttons as a NodeList.
let buttonEl = document.querySelectorAll(".saveBtn");
// Convert the NodeList to an array.
let buttonElArr = Array.from(buttonEl);

// Add an event listener to each button.
for (i = 0; i < buttonElArr.length; i++) {
    buttonElArr[i].addEventListener("click", saveUserTasks);
}

function saveUserTasks() {
    // Grab the hour and textarea value from siblings of the clicked button.
    let hour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".description").children(".text-input").val();
    if (task === "") {
        alert("You have not yet entered a task to save.");
    } else {
        localStorage.setItem(hour, task);
    }
};

// Get item from local storage
// How can I put the data back to the place it originated from?
// localStorage.getItem(hour, task);

let currentTime = moment();
// Display the current day at the top of the calendar.
$("#currentDay").text(currentTime.format("dddd, MMMM Do"));

let scheduledHourEl = document.querySelectorAll(".hour");
let scheduledHourElArr = Array.from(scheduledHourEl);

for (i = 0; i < scheduledHourElArr.length; i++) {

    let scheduledHour = "";
    scheduledHour += scheduledHourElArr[i].getAttribute("name");
    let scheduledHourInt = parseInt(scheduledHour);

    let currentHour = currentTime.format("H");
    let currentHourInt = parseInt(currentHour);

    let textBackground = $(scheduledHourElArr[i]).siblings(".description");

    // If the scheduled hour has past, turn gray. If the present hour, turn red. If a future hour, turn green.
    if (scheduledHourInt < currentHourInt) {
        textBackground.addClass("past");
        textBackground.removeClass("present", "future");
    } else if (scheduledHourInt === currentHourInt) {
        textBackground.addClass("present");
        textBackground.removeClass("past", "future");
    } else (scheduledHourInt > currentHourInt); {
        textBackground.addClass("future");
        textBackground.removeClass("past", "present");
    }
}

