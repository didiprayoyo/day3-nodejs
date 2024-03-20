// 3. input output dari terminal secara asynchronous
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name? ", (name) => {
//     console.log(`Thank you ${name}`);

//     rl.close();
// });
    
// assignment: nama, no telp, email
rl.question("What is your name? ", (name) => {
    rl.question("What is your phoneNumber? ", (phoneNumber) => {
        rl.question("What is your email? ", (email) => {
            console.log(`Thank you
            name: ${name}, 
            phoneNumber: ${phoneNumber}, 
            email: ${email}
            `);

            rl.close();
        });
    });
});

/**
 * Ideas
 * 1. cek email pakai function isEmail dari core module
 */

// // npm install readline-sync
// const readlineSynch = require("readline-sync");
// let name = readlineSync.question("What is your name? ");
// let phoneNumber = readlineSync.question("What is your phone number? ");
// let email = readlineSync.question("What is your email? ");
// console.log(name, phoneNumber, email);