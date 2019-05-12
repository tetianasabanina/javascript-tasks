"use strict";

function duration(from, to) { //get start and finish of period and returns the duration of period in JS object.
    var timer = to - from; // duration in msec
    
    var timerSec = Math.floor(timer / 1000); // duration in sec 
    var sec = timerSec % 60; // extracts seconds
   
    var timerMin = Math.floor(timerSec / 60); // duration in minutes
    var min = timerMin % 60; // extracts minutes
       
    var timerHours = Math.floor(timerMin / 60); // duration in hours
    var hours = timerHours % 24; // extracts hours
       
    var timerDays = Math.floor(timerHours / 24); // duration in days
    var days = timerDays; // days
    
    timeForEvent = {
        d: days,
        h: hours,
        m: min,
        s: sec
    };

    return timeForEvent;
}
var today = new Date();
console.log("today: "+today);

var event = new Date(2019, 5, 21, 6, 30);
var timeForEvent;
console.log("event: "+event);
duration(today, event);
console.log (timeForEvent);
