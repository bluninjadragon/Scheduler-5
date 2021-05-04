$(document).ready(function () {
    // all your code goes here
    

    function init() {
        displayDate();
        // load data from local storage and put it in the correct row
        // #hour-9 and use id combinations and .val to value of localstorage.keynumber'hourX';
        $("#hour9 #sched-text").val(localStorage.getItem("data9"));
        $("#hour10 #sched-text").val(localStorage.getItem("data10"));
        $("#hour11 #sched-text").val(localStorage.getItem("data11"));
        $("#hour12 #sched-text").val(localStorage.getItem("data12"));
        $("#hour13 #sched-text").val(localStorage.getItem("data13"));
        $("#hour14 #sched-text").val(localStorage.getItem("data14"));
        $("#hour15 #sched-text").val(localStorage.getItem("data15"));
        $("#hour16 #sched-text").val(localStorage.getItem("data16"));
        $("#hour17 #sched-text").val(localStorage.getItem("data17"));
        }
    // display current date on the page - moment (get element by ID='currentDay')

    function displayDate() {
        let timeDisplay = $('#currentDay');
        var today = moment().format('MMMM DD, YYYY');
        timeDisplay.text(today);
    }


    function saveTask() {
        // get stuff user put in textarea
        let value = $(this).siblings('#sched-text').val();
        // moved the data attribute to where "this" is looking for (button element)
            // and used it to set it as a key so that when setting item to local storage, there will be a unique key for each hour
        let key = $(this).data('time');
        // save that to localstorage
        localStorage.setItem(key, value);   
        //show message that this was "save to local storage"
        //hide message after certain amount of time
    }

   //color rows based on time of day 
   function updateRowColor() {
    // set variable to current hour
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
}

   
   
    // event listener----------------
    // user click save button
    $('.saveBtn').on('click', saveTask);
    init();
    // use interval to update row color
    updateRowColor();

});

