function myFunc() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit loop when i is 5
    }
  }
}

myFunc(); // This will log 0, 1, 2, 3, 4

//Incorrect way to check for a value in an array
const arr = [1, 2, 3, 4, 5];
if (arr == 3) {
  console.log("Found 3!");
} else {
  console.log("3 Not Found!");
}
//The above statement is wrong. To check if an array contains a value, we can use arr.includes(3)