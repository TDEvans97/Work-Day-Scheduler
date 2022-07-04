let currentDay = moment();
let textareaEl = $("textarea");

// Display the current day at the top of the calendar
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

//Add an event listener to each button
$(".saveBtn").click(saveUserTasks);

function saveUserTasks() {
    // Grab the hour and textarea value from siblings of the clicked button.
    let hour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".description").val();
    console.log(task);
    if (task === "") {
        alert("You have not yet entered a task to save.");
    } else {
        localStorage.setItem(hour, task);
    }
    console.log("clicked");
};

// buttonEl.on("click", saveUserTasks());

// for (let button of buttonElArr.values()) {
    //     button.addEventListener("click", saveUserTasks());
    //     console.log(button);
    // }
    // for (i = 0; i < buttonEl.length; i++) {
    //     buttonEl[i].addEventListener("click", saveUserTasks());
    // }
    
    
    
// if the hour has past, add attr class .past for gray, 
// .present for red, 
// else .future for green