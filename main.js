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

// function celsiusToFahrenheit() {
//   c = prompt("Input Celsius value to convert to Fahrenheit:");
//   f = (parseFloat(c) * (9/5)) + 32;
//   console.log(f.toFixed(1));
//   return f;
// }
// celsiusToFahrenheit();

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// function tempConversion() {
//   temp = prompt("Input numerical temperature value in either Celsius or Fahrenheit:");
//   type = prompt("If you would like to convert Celsius to Fahrenheit type \"C to F\". If you would like to convert Fahrenheit to Celsius type \"F to C\".");
//   temp = parseFloat(temp);
//
//   if ((type == "C to F") || (type == "c to f")){
//     temp = (temp * (9/5)) + 32;
//     console.log("The Fahrenheight temperature is " + temp.toFixed(1) + "º");
//     return temp;
//   }
//   else if ((type == "F to C") || (type == "f to c")){
//     temp = (temp - 32) * (5/9);
//     console.log("The Celsius temperature is " + temp.toFixed(1) + "º");
//     return temp;
//   }
//   else {
//     console.log("You did not properly follow the instructions. Please refresh the page and try again.");
//     return "You did not properly follow the instructions. Please refresh the page and try again.";
//   }
// }
// tempConversion();


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

// function countBs(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) == "B"){
//       count += 1;
//     }
//   }
//   return(count);
// }
// console.log(countBs(prompt("Input a string.")));

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

// function countChars(str1, str2) {
//   var count = 0;
//   for (var i = 0; i < str1.length; i++) {
//     if (str1.charAt(i) == str2){
//       count += 1;
//     }
//   }
//   return(count);
// }
// console.log(countChars(prompt("Input a string."),prompt("Input a character to count.")));

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.
function ohZero (str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "o") {
      return str.replace(/[Oo]/g, "0");
    }
  }
  return str
}
console.log(ohZero("oqweroa"));
// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// function song() {
//   var i = 100;
//   do {
//     i -= 1;
//     console.log(i + " Bottles of Beer on the Wall. Take one down, pass it around " + (i - 1) + " Bottles of Beer on the Wall.");
//   } while (i > 1);
// }
// song();

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// var guessString = prompt("Please guess a number 1 through 100");
// var guessNum = parseInt(guessString);
// var randomNum = Math.floor(Math.random() * 100);
//
// while(guessNum != randomNum){
//   if(guessNum < randomNum){
//     guessNum = prompt("Nope! Too low! Please guess another number.")
//   }
//   else{
//     guessNum = prompt("Nope! Too high! Please guess another number.")
//   }
// };
//
// if(guessNum === randomNum){
//   console.log("You're amazing! The number was " + randomNum);
// };

function guessingGame () {
  numberGuess = prompt("Guess my number between 1 and 100");
  myNumber = Math.floor((Math.random() * 100) + 1);
  console.log(myNumber);

  while (numberGuess != myNumber) {
    if ((numberGuess < myNumber) && (numberGuess > 0)){
      numberGuess = prompt("Your guess was too low. Guess another number between 1 and 100");
    }
    else if ((numberGuess > myNumber) && (numberGuess < 101)){
      numberGuess = prompt("Your guess was too high. Guess another number between 1 and 100");
    }
    else if ((isNaN(numberGuess) == true) || (numberGuess <= 0) || (numberGuess >= 101)) {
      numberGuess = prompt("You picked an invalid number. Guess another number between 1 and 100");
    }
  };

  if (numberGuess == myNumber) {
    alert("Congrats! You picked my number! My number was " + myNumber);
  }
}

guessingGame();



// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
