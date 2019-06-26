
// export let inputYear = 1995;
// export let inputMonth = 3;
// export let inputDay = 3;

const calendar = ["Nothinguary", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];





export function inputNaNCheck (input){
    if(isNaN(input) === true){
      return true;
    }else {
      return false;
    }
}

export function limitInputRange (year,month,day){
  console.log("Testing year: " + year);
  console.log("Testing month: " + month);
  console.log("Testing day: " + day);
  if (month > 12 || month < 1) {
    return false;
  }else if (day > 31 || day < 1) {
    return false;
  } else if (month === 2 && day > 29) {
    return false;
  } else if (Math.ceil(year) != year || Math.ceil(month)!= month || Math.ceil(day) != day ) {
    return false;
  }else {
    return true;
  }
}

export function febChecker (month, day, year) {
  console.log("febChecker! Go!");
  if (month === 2 && day > 28) {
    return leapYearDetector(year)
  }
}

export function leapYearDetector(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

export function monthToString(month){
  let newMonth = "";
  newMonth = calendar[month];
  return newMonth;
}

export function dayToString(day){
  let newDay = "";
  newDay = daysOfWeek[day];
  return newDay;
}
