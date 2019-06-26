import {inputYear, inputNaNCheck, inputMonth, inputDay, limitInputRange, febChecker, monthToString, calendar, userDate, dayToString} from "./../src/datefinder.js";

describe ('date', function(){
  it('should tell if input is not a number', function(){
    expect(inputNaNCheck(inputYear)).toEqual(false);

  });

  it('limit range of user inputs to and if inputs are whole numbers', function(){
    expect(limitInputRange(inputYear, inputMonth, inputDay)).toEqual(true);

  });

  it('permits feb 29th only during leap years', function(){
    expect(febChecker(inputMonth, inputDay, inputYear)).toEqual(false);

  });

  it('will convert an input month number to a string month name', function(){
    console.log(monthToString(inputMonth));
    expect(monthToString(inputMonth)).toEqual("March");

  });

  it('will output the number of the day of the week according to the date', function(){  
    console.log(userDate);
    expect(userDate.getDay()).toEqual(5);

  });

  it('will convert the number of day of week to the string of the name', function(){

    expect(dayToString(userDate.getDay())).toEqual("Friday");

  });


});


// describe ('sudoku', function(){
//   it ('test if x = 1', function(){
//
//     expect(x).toEqual(1);
//   });
//
//
//
//
// });
