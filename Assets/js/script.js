let currentDay = moment();
// Select all buttons as a NodeList.
let buttonEl = document.querySelectorAll(".saveBtn");
// Convert the NodeList to an array.
let buttonElArr = Array.from(buttonEl);

// Display the current day at the top of the calendar.
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// Add an event listener to each button.
for (i = 0; i < buttonElArr.length; i++) {
    buttonElArr[i].addEventListener("click", saveUserTasks);
}

function saveUserTasks() {
    console.log("Hello")
    // Grab the hour and textarea value from siblings of the clicked button.
    let hour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".description").children(".text-input").val();
    if (task === "") {
        alert("You have not yet entered a task to save.");
    } else {
        localStorage.setItem(hour, task);
    }
};

// if the hour has past, add attr class .past for gray,
// .present for red,
// else .future for green