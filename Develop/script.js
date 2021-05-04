$(document).ready(function () {
    // all your code goes here
    // define storage array
    let storageArray = [];
    // user click save button
    $('.saveBtn').on('click', saveTask);
   
    function updateRowColor() {
       // set variable to current hour
       // loop through each row of the class (time-block)
        // find row time using data attribute (9<21 hours)
        // add the past class to $(this).addClass('past')
   }
    function saveTask() {
        alert('saved');
        // get stuff user put in textarea
        let schedText = $('textarea').val();
        // save that to localstorage
        localStorage.setItem("text", storageArray);
        //show message that this was "save to local storage"
        //hide message after certain amount of time
    }

   //color rows based on time of day 
   // use interval to update row color
    updateRowColor();

   // load data from local storage and put it in the correct row
        // #hour-9 and textarea.textContent to value of localstorage.keynumber'hour 9;
        // #hour-9 and textarea.textContent to value of localstorage.keynumber'hour 9;
   // display current date on the page - moment (get element by ID)

});

// event listener