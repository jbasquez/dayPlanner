# 05 Third-Party APIs: Work Day Scheduler

This is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. It also uses the Moment.js library.https://jbasquez.github.io/dayPlanner/
<img width="720" alt="Screen Shot 2021-05-02 at 8 09 11 AM" src="https://user-images.githubusercontent.com/71075507/118202451-fdd12b00-b427-11eb-8ec8-c5dac42d5668.png">

Motivation: As an employee with a busy schedule I want to add important events to a daily planner so that I can manage my time effectively


## Story

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

