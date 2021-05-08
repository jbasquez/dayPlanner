//tells document to ready once fully loaded
$( document ).ready(function() {
    //console.log to verify its running
    console.log( "ready!" );
    //calls on the class current time and adds the current time to the empty field when the page is fully loaded
    currentDay.innerHTML = moment().format('llll');
    //event listener for button to set and save id and text to local storage
    $( ".saveBtn" ).click(function() {
        alert( "Handler for .click() called." );
         //save 2 variables 
         var toDoHour=$(this).siblings(".toDo").attr("id");
         var singleToDo=$(this).siblings(".toDo")[0].value;
         // calling variables from index.html
         console.log(toDoHour);
         console.log(singleToDo);

         // set/save to local storage
         localStorage.setItem(singleToDo,toDoHour)
      });
      let hour = moment().hours();
});