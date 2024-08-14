function leapYears (year) {
    if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYears(2020));
console.log(leapYears(2021));