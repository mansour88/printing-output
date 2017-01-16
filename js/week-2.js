// Printing Output
// Task 1

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n----------\n\n" + 
      "a + b =" + " " + (a + b) + "\n" +
      "a - b =" + " " + (a - b) + "\n" +
      "a * b =" + " " + (a * b) + "\n" +
      "a / b =" + " " + (a / b) + "\n" +
      "a % b =" + " " + (a % b) + "\n" +
      "a += 1 =" + " " + (a += 1) + "\n" +
      "a -= 1 =" + " " + (a -= 1) + "\n" +
      "a *= b =" + " " + (a *= b) + "\n" +
      "a /= b =" + " " + (a /=b) + "\n" +
      "a %= b =" + " " + (a %= b) + "\n" +
      "a == b =" + " " + (a == b) + "\n" +
      "a != b =" + " " + (a !=b) + "\n" +
      "a > b =" + " " + (a > b) + "\n" +
      "a < b =" + " " + (a < b) + "\n" +
      "!a && !c =" + " " + (!a && !c) + "\n" +
      "!a || !c =" + " " + (!a || !c) + "\n"
     );

// Task 2
var firstname = "Mansour";
var lastname = "Abdullah";
var email = "abdu0393@algonquinlive.com";

var output = "My name is " + firstname + " " + lastname + "." + " " + "You can contact me at " + email + ".";

alert(output);

// Task 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

console.log(numbers[0]); // first array element
console.log(numbers[4]); // last array element
console.log(numbers[0] + " + " + numbers[4] + " = " + (numbers [0] + numbers [4]));


var sum = (numbers[0] + " + " + numbers[4] + " = ");

// Check if even or odd
if(sum % 2 == 0)
{
  alert (numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]) + "\n" + "This is an even number" + ".");
}
else
{
  alert(numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]) + "\n" + "This is an odd number" + ".");
}

