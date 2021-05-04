$(document).ready(function () {
    // all your code goes here
    
    //variables-------------
    // set array variable for looping through each hour's row

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
   function updateRowColor9() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour9 = eval($('#hour9 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour9 < currentHour) {
        // color set to "past" class
        $('#hour9 #sched-text').addClass('past');
    } else if (rowHour9 > currentHour) {
        // color set to "present" class
        $('#hour9 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour9 #sched-text').addClass('present');
    }
   }
    
   function updateRowColor10() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour10 = eval($('#hour10 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour10 < currentHour) {
        // color set to "past" class
        $('#hour10 #sched-text').addClass('past');
    } else if (rowHour10 > currentHour) {
        // color set to "present" class
        $('#hour10 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour10 #sched-text').addClass('present');
    }
   }

   function updateRowColor11() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour11 = eval($('#hour11 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour11 < currentHour) {
        // color set to "past" class
        $('#hour11 #sched-text').addClass('past');
    } else if (rowHour11 > currentHour) {
        // color set to "present" class
        $('#hour11 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour11 #sched-text').addClass('present');
    }
   }

   function updateRowColor12() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour12 = eval($('#hour12 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour12 < currentHour) {
        // color set to "past" class
        $('#hour12 #sched-text').addClass('past');
    } else if (rowHour12 > currentHour) {
        // color set to "present" class
        $('#hour12 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour12 #sched-text').addClass('present');
    }
   }
   
   function updateRowColor13() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour13 = eval($('#hour13 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour13 < currentHour) {
        // color set to "past" class
        $('#hour13 #sched-text').addClass('past');
    } else if (rowHour13 > currentHour) {
        // color set to "present" class
        $('#hour13 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour13 #sched-text').addClass('present');
    }
   }

   function updateRowColor14() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour14 = eval($('#hour14 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour14 < currentHour) {
        // color set to "past" class
        $('#hour14 #sched-text').addClass('past');
    } else if (rowHour14 > currentHour) {
        // color set to "present" class
        $('#hour14 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour14 #sched-text').addClass('present');
    }
   }

   function updateRowColor15() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour15 = eval($('#hour15 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour15 < currentHour) {
        // color set to "past" class
        $('#hour15 #sched-text').addClass('past');
    } else if (rowHour15 > currentHour) {
        // color set to "present" class
        $('#hour15 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour15 #sched-text').addClass('present');
    }
   }

   function updateRowColor16() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour16 = eval($('#hour16 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour16 < currentHour) {
        // color set to "past" class
        $('#hour16 #sched-text').addClass('past');
    } else if (rowHour16 > currentHour) {
        // color set to "present" class
        $('#hour16 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour16 #sched-text').addClass('present');
    }
   }

   function updateRowColor17() {
    // set variable to current hour (military)
    let currentHour = eval(moment().format('HH'));
    let rowHour17 = eval($('#hour17 textarea').data('hour'));
    // loop through each row of the class (time-block)
     // find row time using data attribute (9<21 hours)
     // add the past class to $(this).addClass('past')
    if (rowHour17 < currentHour) {
        // color set to "past" class
        $('#hour17 #sched-text').addClass('past');
    } else if (rowHour17 > currentHour) {
        // color set to "present" class
        $('#hour17 #sched-text').addClass('future');
    } else {
        // color set to "future" class
        $('#hour17 #sched-text').addClass('present');
    }
   }
   
    // event listener----------------
    // user click save button
    $('.saveBtn').on('click', saveTask);
    init();
    // use interval to update row color
    updateRowColor9();
    updateRowColor10();
    updateRowColor11();
    updateRowColor12();
    updateRowColor13();
    updateRowColor14();
    updateRowColor15();
    updateRowColor16();
    updateRowColor17();

});

