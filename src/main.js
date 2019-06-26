import "./styles.css";
import 'bootstrap';
import $ from "jquery";

import {inputYear, inputNaNCheck, inputMonth, inputDay, limitInputRange, febChecker, monthToString, calendar, userDate, dayToString} from "./../src/datefinder.js";



//// UI LOGIC
function superFunction(inputYear, inputMonth, inputDay){
  console.log(inputNaNCheck(inputYear));
  console.log(febChecker(inputMonth, inputDay, inputYear));
  if (inputNaNCheck(inputYear) === true || inputNaNCheck(inputMonth) === true || inputNaNCheck(inputDay) === true) {
    return $(".day-of-week-output").text("Sorry! Please input a number");
  } else if (limitInputRange(inputYear, inputMonth, inputDay) === false) {
    return $(".day-of-week-output").text("Please enter a valid date range");
  } else if (febChecker(inputMonth, inputDay, inputYear) === false) {
    console.log(febChecker(inputMonth, inputDay, inputYear));
      return $(".day-of-week-output").text("Please enter a valid date");
  } else{
    let convertedMonth = monthToString(inputMonth);
    console.log(convertedMonth + " " + inputDay + ", " + inputYear);
    let userDate = new Date(convertedMonth + " " + inputDay + ", " + inputYear);
    if (inputYear < 1000) {
      userDate.setFullYear(inputYear);
    }
    console.log(userDate);
    let dayOfWeek = dayToString(userDate.getDay());
    $(".day-of-week-output").text(dayOfWeek);

  }


}






$(document).ready(function(){

  $(".date-check").submit(function(event){
    event.preventDefault();
    console.log("Button got clicked!");
    let inputYear = parseInt($("#year").val());
    let inputMonth = parseInt($("#month").val());
    let inputDay = parseInt($("#day").val());
    console.log(inputYear);
    console.log(inputMonth);
    console.log(inputDay);
    superFunction(inputYear, inputMonth, inputDay);

  });


});
