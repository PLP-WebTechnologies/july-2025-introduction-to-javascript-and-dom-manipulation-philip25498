// This script file contains all the requirements for the assignment.
// Each section is clearly commented as requested.

// ----------------------------------------------------
// Part 1: Variable Declarations and Conditionals
// ----------------------------------------------------

// Declare variables for a hypothetical age check
const userAge = 25;
const requiredAge = 18;

// Use a conditional statement to check the user's age
if (userAge >= requiredAge) {
    console.log("The user is old enough to access this content.");
} else {
    console.log("The user is NOT old enough to access this content.");
}

// ----------------------------------------------------
// Part 2: Two Custom Functions
// ----------------------------------------------------

/**
 * Custom Function 1: Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function addNumbers(a, b) {
    return a + b;
}

// Call the function and store the result in a variable
const sum = addNumbers(5, 10);
console.log("The sum is: " + sum);

/**
 * Custom Function 2: Changes the text content of an HTML element.
 */
function updateGreeting() {
    // DOM Interaction 1: Select an element and change its text content
    const greetingElement = document.getElementById("greetingMessage");
    greetingElement.textContent = "Hello, JavaScript!";
}

// Call the greeting function to make the change when the page loads
updateGreeting();

// ----------------------------------------------------
// Part 3: Two Loop Examples
// ----------------------------------------------------

// Example 1: A `for` loop to count from 1 to 5
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// Example 2: A `while` loop to add items to the HTML list
console.log("While Loop Example (adding to the list):");
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let i = 0;
const listElement = document.getElementById("fruitList");

while (i < fruits.length) {
    // DOM Interaction 3: Create a new list item and add it to the page
    const listItem = document.createElement("li");
    listItem.textContent = fruits[i];
    listElement.appendChild(listItem);
    i++;
}

// ----------------------------------------------------
// Part 4: Three DOM Interactions
// ----------------------------------------------------

// We already used two DOM interactions above, but here is a third one.
// Interaction 1: Updating the greeting text (inside the updateGreeting function)
// Interaction 3: Adding list items to the page (inside the while loop)

// Let's add the final DOM interaction here for the button click
const colorButton = document.getElementById("colorButton");

// Add an event listener to the button
colorButton.addEventListener("click", function() {
    // This is our third DOM interaction
    // We will change the color of the greeting message
    const greetingElement = document.getElementById("greetingMessage");
    greetingElement.classList.toggle("blue-text"); // This will add or remove the 'blue-text' class
});
