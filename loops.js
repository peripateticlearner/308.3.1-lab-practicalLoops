// -------------------ALAB 308.3.1 - Practical Loops-------------------------------
// --------------------- Part One: Fizz Buzz ---------
for (let i = 1; i <= 100; i++) { // loop through numbers 1 to 100
    if (i % 3 === 0 && i % 5 === 0) { // is divisible by both 3 and 5
          console.log("Fizz Buzz")
        } else if (i % 3 === 0) { // is divisible by 3
          console.log("Fizz")
        } else if (i % 5 === 0) { // is divisible by 5
          console.log ("Buzz")
        } else { // if not divisible by 3 or 5 log the number
          console.log(i)
        }
    }


// ------------------- Part Two: Prime Time ------------
let nextPrime = 20 // startng number

// check numbers until a prime is found
while (true) {
    console.log(`Checking number: ${nextPrime}`); // log current number being checked
    let isPrime = true; // assume initially its prime
    
    // loop through numbers from 2 to one less than the nextPrime to check if its divisible 
    for (let i = 2; i < nextPrime; i++) {
        console.log(`Testing divisor: ${i}`); // log each divisor being tested
        if (nextPrime % i === 0) { // if it is divisible it's not prime
            console.log(`${nextPrime} is divisible by ${i}, not prime.`);
            isPrime = false; // make it not prime
            break; // leave the loop
        }
    }

    // since no divisors were found, nextPrime is prime
    if (isPrime) {
        console.log(`${nextPrime} is prime!`); // log the found prime number
        break; // leave the loop
    }
    nextPrime++; // if its not a prime, move to the next number
}

// -------------------- Part Three: Feeling Loopy ------------

// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell = ""; // temporary variable to hold each cell
let row = []; // temporary array to hold each row
let index = 0; // Track position in the string

while (index < csv.length) {
    const character = csv[index]; // grab current character

    if (character === ",") {
        row[row.length] = cell; // add cell to row
        cell = ""; // reset the cell
    } else if (character === "\n") {
        row[row.length] = cell; // add last cell in row
        console.log(row[0], row[1], row[2], row[3]); // log the row
        row = []; 
        cell = "";
    } else {
        cell = cell + character; // add character to next cell
    }
    index = index + 1 // move to next character
}

// Since the last row doesn't end in \n, this will make sure its logged regardless
if (cell !== "") {
    row[row.length] = cell; // add the final cell
    console.log(row[0], row[1], row[2], row[3]); // log last row
}