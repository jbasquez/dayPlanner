//tells document to ready once fully loaded
$( document ).ready(function() {
    //console.log to verify its running
    console.log( "ready!" );
    //event listener for button to set and save id and text to local storage
    $( ".saveBtn" ).click(function() {
        alert( "Handler for .click() called." );
         //save 2 variables 
         var toDoHour;
         //var singleToDo=$(this).siblings(".toDo")[0].value;
         // calling variables from index.html
         console.log($(this).siblings(".toDo")[0].value);
         console.log($(this).siblings(".toDo").attr("id"));

         // set/save to local storage
         //localStorage.setItem(singleToDo,toDoHour)
      });
      
});