let userInput: unknown;
let userName: String;

userInput = 5;
userInput = 'Max';
// userName = userInput;       any Not Error / unknown Error

if(typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: String, code: number): never {
    throw {message: message, errorCode: code};
    // while(true) {}
}

const result = generateError('An error occured!', 500);

console.log(result);