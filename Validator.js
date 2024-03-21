const validator = require("validator");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// shortcut console.log(): log -> baris 2
// console.log(validator.isEmail("didiprayoyo"));
// console.log(validator.isEmail("didiprayoyo@gmail.com"));

function inputEmail(name, phoneNumber) {
    rl.question("What is your email? ", (email) => {
        if (validator.isEmail(email)) {
            console.log(`name: ${name}`);
            console.log(`phone number: ${phoneNumber}`);
            console.log(`email: ${email}`);
            
            rl.close();
        } else {
            console.log("email: wrong format, enter input again!");
            inputEmail(name, phoneNumber);
        }
    });
}

function inputPhoneNumber(name) {
    rl.question("What is your phone number? ", (phoneNumber) => {
        if (validator.isMobilePhone(phoneNumber, "id-ID")) {
            // console.log(`phone number: ${phoneNumber}`);
            inputEmail(name, phoneNumber);
        } else {
            console.log("phone number: wrong format, your phone number must be Indonesia number");
            inputPhoneNumber(name);
        }
    });
}

function inputName() {
    rl.question("What is your name? ", (name) => {
        if (validator.isAlpha(name)) {
            // console.log(`name: ${name}`);
            inputPhoneNumber(name);
        } else {
            console.log("name: wrong format, your name must be contain only alphabets");
            inputName();
        }
    });
}

function askInformation() {
    inputName();
}

askInformation();