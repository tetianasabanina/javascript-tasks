"use strict";

var from = new Date(); //current time
var to = new Date(2019,5,21,6,30); //holiday starts
console.log(from);
console.log(to);
var timer = to - from;
console.log("for holiday millisec "+timer);
var msec = timer%1000;
console.log("millisec "+msec);
var timerSec = Math.floor(timer/1000);
console.log("for holiday sec "+timerSec);
var sec = timerSec%60;
document.getElementsByClassName("value").innerHTML = sec;
console.log("seconds "+sec);
var timerMin = Math.floor(timerSec/60);
console.log("for holiday min "+timerMin);
var min = timerMin%60;
console.log("minutes "+min);
document.getElementsByClassName("value").innerHTML = min;
var timerHours = Math.floor(timerMin/60);
console.log("for holiday hours "+timerHours);
var hours = timerHours%24;
console.log("hours "+hours);
document.getElementsByClassName("value").innerHTML = hours;
var timerDays = Math.floor(timerHours/24);
console.log("for holiday days "+timerDays);
document.getElementsByClassName("value").innerHTML = timerDays;

