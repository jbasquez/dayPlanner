//tells document to ready once fully loaded
$( document ).ready(function() {
    //console.log to verify its running
    console.log( "ready!" );
    //calls on the class current time and adds the current time to the empty field when the page is fully loaded
    currentDay.innerHTML = moment().format('llll');
    //event listener for button to set and save id and text to local storage
    $( ".saveBtn" ).click(function() {
        alert( "Handler for .click() called." );
         //save 2 variables and connects them to html
         var toDoHour=$(this).siblings(".toDo").attr("id");
         var singleToDo=$(this).siblings(".toDo")[0].value;
         // calling variables from index.html
         console.log(toDoHour);
         console.log(singleToDo);

         // set/save to local storage
         localStorage.setItem(toDoHour, singleToDo);
      });
      
    // loop over time blocks
    $(".row").each(function() {
      //makes current time a variable
        var hour = moment().hours();
        console.log(hour);

        //sets variable to html id
        var blockHour = parseInt($(this).attr("id"));

        //gets value from storage
        console.log(localStorage.getItem(blockHour));
        console.log("this: ", $(this).attr("id"));

        //new var to call on any id with a value
        var currentTextArea = document.querySelector(".textarea" + blockHour)

        //makes the text area equal to value save in local storage
        currentTextArea.value = localStorage.getItem(blockHour)
        
        // if current clock hour is less than the current hour it is in the past so add the class of past to change the color to white
      if (blockHour < hour) {
        $(this).addClass("past");
      } 
      //if current time remove and add class to change colors to red
      else if (blockHour === hour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        //future class is added to change to green
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
});