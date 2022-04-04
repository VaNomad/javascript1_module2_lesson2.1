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
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function(prize) {
  console.log(prize);
})

// --------------------------------- Question 3
setTimeout(function () {
  console.log("I waited 5 seconds before executing");
}, 5000)
const numberOfSeconds = 5;

// --------------------------------- Question 4


