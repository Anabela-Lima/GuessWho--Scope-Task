// GUESS 1 ///////////////////
let guess = {      // we store an object inside a guess global variable
    hair_colour: "red",
    eye_colour: "blue",
    hat: false,
    glasses: true,
    firstName: "Joseph"
};

const guessWho = function(){   // we have a function stored in guessWho variable, const means variable guessWho cant be reassigned but can be modified
    return `Guess who is ${guess.firstName}`; // this guessWho function returns a string with a variable that call guess obect and obtains its firstName property
};

const finalAnswer = guessWho(); // we then store the result of the function stored in guessWho variable
console.log(finalAnswer);      // and print it to the console

// My guess = Joseph because its assgined as a global variable
// so it should be acessible from anywhere outside of our program

// PREDICTION = CORRECT!

// GUESS 2 ///////////////////

let firstName = "Donna";      // we declare a global variable, accessible from anywhere in our program 

const guessWho = function(){
    const glasses = false;
    let firstName = "Liz";     // reassigning global variable firstName inside the function so now its Block scope, therefore only accessible within the function
    return `Guess Who is ${firstName}.`;     
}


const guess1 = guessWho();
console.log("guess1: ", guess1); // the result of this will be Liz because, when we reassigned the global variable, we only did it within the function, so its only accessible here

const guess2 = `Guess Who is ${firstName}`;
console.log("guess2: ", guess2); // this guess 2 console log  will make use of the global variable + not reassigned one, because it does not 
                                // have access to the reassigned firstname i.e. liz that was declared inside the function. My guess for this result = donna


// PREDICTION = CORRECT!

                                
// GUESS 3 ///////////////////

const guess = {   // here we have a guess object, const means it cant be reassigned, but CAN be modified (i.e. cant do guess = something else but we can change contents inside object)
    hair_colour: "black",
    eye_colour: "brown",
    hat: false,
    glasses: false,
    firstName: "Andy"
}

const changeHat = function(){  //  changeHat is equal to a function gets hat from object and modifies it to not hat of guess
    guess.hat = !guess.hat;   // i.e. hat = true
}


// hair_colour: "black",
// eye_colour: "brown",
// hat: true,
// glasses: false,
// firstName: "Andy"


const changeGuess = function(newName){     // changeGuess is equal to a function that takes in some parameter "new name"
    guess.firstName = newName;            // and modifies first name of object to newName
}

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,
// glasses: false,
// firstName: "newName"


const guessWho = function(){                   //guessWho is a function 
    return `Guess Who is ${guess.firstName}`  // that returns the string: 'Guess who is [first name of object guess]' 
                                              // i.e.   `Guess Who is newName`
}

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,
// glasses: false,
// firstName: "newName"

changeHat();    // call the function changeHat() with no arguments inputted so name is still newName
                // we are just calling the function not on the object so my guess still stands    

// hair_colour: "black",
// eye_colour: "brown",
// hat: true,
// glasses: false,
// firstName: "newName"

if(guess.hat){  // if hat = true 
    changeGuess("Chris"); // call changeguess with input chris - so the new object name is "Chris" 
}


// hair_colour: "black",
// eye_colour: "brown",
// hat: true,
// glasses: false,
// firstName: "Chris"


const finalAnswer = guessWho();  // we have a final answer that is going to print a string `Guess Who is [some name]`
console.log(finalAnswer);   // final answers is ? My guess is : `Guess Who is Chris]`

// PREDICTION = CORRECT!



// GUESS 4 ///////////////////

let firstName = "Gail";     // we have a global vairable firstname with value "Gail" -> since its global can be accessed from anywhere in our program

if ( firstName === "Gail"){   // if the first name is Gail, which is true
    let firstName = "Ashley"; // we reassign firstname to "Ashley", but this is a block scope- this reassignment only lives inside the block of code it was declared
                              // i.e. inside this loop  
}

const guessWho = function(){   // we have a function that is is stored inside a "guessWho" variable
    return `Guess Who is ${firstName}` // it returns the string guess who is [first name], this will say 
                                       // Guess who is Gail because the guess who does not have access to the reassined first name 
                                       // so it will use the global variable:  `Guess Who is Gail`
}

const finalAnswer = guessWho(); // final answer is ouput of guessWho() function, that is .
console.log(finalAnswer);   // I predict that the console log answer will say: `Guess Who is Gail`

// PREDICTION = CORRECT!


// // GUESS 5 ///////////////////
  
const guess = {              // we have an object stored inside the guess variable, this variable is const so cannot be reassigned, although its contents can be changed
    hair_colour: "blonde",
    eye_colour: "brown",
    hat: false,
    glasses: false,
    firstName: "Jennifer"
}

const changeGuess = function(){  // we have a second a object stored inside a function, and that function is stored inside a variable "change guess"
    guess = {
        hair_colour: "blonde",
        eye_colour: "blue",
        hat: false,
        glasses: false,
        firstName: "Kyle"
    }
}

changeGuess();   // we call the changeGuess function  but we dont do anything to it
console.log(`Guess Who is ${guess.firstName}`);  // we then print something to the console, a string 
                                                // which also prints a  variable, that variable is the first name of guess


                                                // I predict that the console will give us an error because, 
                                                // when you define a variable as const, it means it cannot be reassigned,
                                                // in the change guess function we attempt to reassign guess by doing 
                                                // " guess = "  which is not permitted. We can only change the contents by for instace
                                                // doing guess.firstName = Kyle, and not reassignment of the entire variable guess
                                                // I predict an error 


// PREDICTION = CORRECT!                     


// Score 5/5
                                                
