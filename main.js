// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(a, b) {
  if (a < b){
    console.log(a);
  }
  else if (a == b) {
    console.log(a + " is equal to " + b);
  }
  else {
    console.log(b);
  }
}
minimum(4, 3);

// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(a, b, c) {
  if ((a < b) && (a < c)) {
    console.log(a);
  }
  else if ((b < a) && (b < c)) {
    console.log(b);
  }
  else if ((c < a) && (c < b)) {
    console.log(c);
  }
  else if ((a == b) && (a == c) && (b == c)) {
    console.log(a + " is equal to " + b + " and also equal to " + c);
  }
  else if ((a == b) < c){
    console.log(a);
  }
  else if ((b == c) < a) {
    console.log(b);
  }
  else if ((a == c) < b) {
    console.log(c);
  }
}
minimum3(4, 1, 3);


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array){
  var x = 0;
  for (var i = 0; i < array.length; i++) {
    x += array[i];
  }
  return x;
}
console.log(sum([1, 2, 3, 4]));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(array) {
  var x = array[0];
  for (var i = 1; i < array.length; i++) {
    x *= array[i];
  }
  return x;
}
console.log(multiply([1, 2, 3, 4]));

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
function filterSixPlus(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i].length < 6) {
      array.splice(array[i], 1);
    }
  }
  return array;
}
console.log(filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
