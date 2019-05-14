"use strict";

function duration(from, to) { //gets start and finish of period and returns the duration of period as a JS object.
    var timer = to - from; // duration in msec
    // console.log(timer);
    
    var timerSec = Math.round(timer / 1000); // duration in sec 
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

function printInterval (timeForEvent) { // prints data from object to the window
document.querySelector(`[data-key='${"d"}']`).innerHTML = timeForEvent['d'];
document.querySelector(`[data-key='${"h"}']`).innerHTML = timeForEvent['h'];
document.querySelector(`[data-key='${"m"}']`).innerHTML = timeForEvent['m'];
document.querySelector(`[data-key='${"s"}']`).innerHTML = timeForEvent['s'];
}

function stopTimer() { //stops timer when the event time achived
    clearInterval(interval);
}

function setsTimer() { // event's timer
    if (Math.round(today/1000 < event/1000)) {
        today = new Date();
        //console.log (event/1000 - Math.round(today/1000));
        duration(today, event);
        printInterval(timeForEvent);
    }
    else {    
        stopTimer();
        myMessage();
    }
}

var today = new Date();
console.log("today: "+today);
var event = new Date(2019, 4, 14, 11, 16);
console.log("event: "+event);
var timeForEvent;
var interval = setInterval(setsTimer, 1000); // sets time interval for running programm

