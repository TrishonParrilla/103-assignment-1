console.log("Functions");

function sayHello() {
    console.log("Hello CH65!");
}

sayHello(); // using code to trigger function

// Example 2. Fn with 1 parameter

function greetBird(birdName) {
    document.write(`<p>${birdName} ready to attack some pigs</p>`);
}

greetBird("Yellow");
greetBird("Red");
greetBird("Blue");

// function printing to the screen using document.write.

function greetPlayer(firstName,lastName) {
    document.write(`<p>Welcome back ${firstName} ${lastName}.</p>`);
}

greetPlayer("Trishon", "Parrilla");


// Has 1 parameter of a player's score and multiplies it by 2 whilst printing it to the console log.
function doubleScore(score) {
    score *= 2; 
    console.log(`Your score is ${score}.`);
}

doubleScore(3);

//trigger a function from the console with prompt

function askCharacterName() {
    let characterName = prompt("Enter the name:");
    document.write(`<p>${characterName}</p>`);
}



// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"Hello firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName= "Unknown" , lastName= "Unknown") {
    console.log(`${firstName} ${lastName}`);

}




combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice");// Alice Unknown
combineNames(); // Unknown Unknown


// Challenge 3: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should calculate the seconds by multiplying the minutes by 60. 
// - Call the function with different values of minutes and print the results.

//let secs = mins * 60;
//function convertToSeconds(mins){
//console.log(`${mins} mins are ${secs} secs`)
// }
//
//convertToSeconds(1);
//convertToSeconds(10);
//convertToSeconds(3);

function convertSeconds () {
    console.log("Converting");
    let mins = prompt("Enter mins: ");
    let secs = mins * 60;
    document.write(`${mins} mins are ${secs} secs`);
}

function sarmaPrinter() {
    console.log("SARMA!");
    console.log("SARMA!");
    console.log("SARMA!");
}

sarmaPrinter();