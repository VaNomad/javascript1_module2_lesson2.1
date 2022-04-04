// --------------------------------- Question 1
function receivingFunction(argument) {
  if (typeof argument === "function") {
    argument();
  } else {
    console.log("I am not a function");
  }
}
function callbackFunction() {
  console.log("I am a callback function");
}
receivingFunction(callbackFunction);

// --------------------------------- Question 2
