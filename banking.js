// Account

const account = [
    {name:"John Mbugu", pin: "2345", account_number: 34345, amount: 0},
    {name: "Samson Mwangi", pin: "9993", account_number: 12345, amount: 0},
];

/*

Create a function that:
 -prompts for name, pin, 
 -sets an account number, 
 -sets initial amount 0

The function should also check if someone has the account
 -can use for or while loop
 -traverse array checking each 
 -check if the account_number is a number
 -confirm if the pin is also a number (with a minimum length of 4 characters)

*/

let atm = null;

function createAccount() {
    const name = prompt ("Enter your name");
    const pin = prompt ("Enter your pin");
    const account_number = prompt ("Enter account number");

    for (let i = 0; i < array.length; i++) {
        console.log("i is", i);
        let singleAccount = account[i];
        if (singleAccount.account_number == account_number) {
            alert (`Account number ${account_number} exists`);
            return;
        } 
    }

    const account = {
        name: name,
        pin: pin,
        account_number: account_number, 
        amount: 0
    };
}

/* 

When the pin and account number match this function should
allow the user to login.

*/

function loginUser() {
    const account_number = prompt ("Enter account number");
    const pin = prompt ("Enter 4 digit pin");

    let foundAccount = null;
    for (let i = 0; i < accounts.length; i++) {
        let singleAccount = accounts[i];
        if (account_number == singleAccount.account_number) {
            foundAccount = singleAccount;
            break;
        }
    }

    // Consider a scenario where we did not find an account

    if (!foundAccount) {
        alert (`Account ${account_number} not found`);
        return;
    }

    // Checking if the pin matches

    // Cases where the pin does not match

    if (pin !== foundAccount.pin) {
        alert (`Invalid pin`);
        return;
    }

    // When account has been found

    atm = foundAccount;
}

/*

Deposit function 
 -amount to deposit
 -checks if the amount to deposit is a number
 -checks for negatives
 -access and reads previous transactions
 -updates the property

*/

function deposit() {
    if (!atm) {
        alert ("Login please");
        return;
    }
    console.log("before");
    console.log(atm);

    let amountToDeposit = prompt ("Enter amount to deposit");

    // Check for negatives
    if (numberAmount<=0){
        alert("To deposit enter amount greater than 1");
        return;
    }

    // Access and read previous amount for updating purposes (amount => atm.amount)
    storeLastTransaction(numberAmount, "deposit", atm.amount);
    let newAmount = atm.amount + numberAmount;

    // Update the property
    atm.amount = newAmount;

    console.log ("after");
    console.log(atm);
}

// Function to withdraw 

function withdraw() {
    if (!atm) {
        alert("Login please");
        return;
    }
    console.log("before");
    console.log(atm);

    let amountToWithdraw = prompt ("Enter amount to withdraw");
    if (isNaN(amountToWithdraw)) {
        alert("Enter a valid number to withdraw");
        return;
    }
    amountToWithdraw = Number(amountToWithdraw);
    if (amountToWithdraw === 0) {
        alert("Minimum withdrawal amount is 1 ksh");
        return;
    }
    if (amountToWithdraw<0) {
        amountToWithdraw = amountToWithdraw * -1;
    }
    if (atm.amount < amountToWithdraw) {
        alert("Insufficient balance in your account");
        return;
    }

    storeLastTransaction(amount, "withdraw", atm.amount);
    let newAmount = atm.amount - amountToWithdraw;

    atm.amount = newAmount;
    alert(`Withdrawal of amount ${amountToWithdraw} successful`);

    console.log("after");
    console.log(atm);
}

// Checking previous balance

function storeLastTransaction(amount, type, prevBalance) {
    let date = new Date();
    let transaction = {
        amount: amount,
        type: type,
        prevBalance: prevBalance,
        timeStamp: date.toDateString(),
    }
    
    // update
    atm.lastTransaction = transaction;
}

// Logout Option

function logout() {
    atm = null; // Sets it to null
}

// Checking Balance

function showBalance() {
    if (!atm) {
        alert("Login please");
        return;
    }
    if (atm.lastTransaction) {
        alert(
            `Hi, ${atm.name}.
            Balance ${atm.amount}.
            Last transaction ${atm.lastTransaction.type}.
            Date ${atm.lastTransaction.timeStamp}.
            prevBalance ${atm.lastTransaction.prevBalance}.
            amount Transacted ${atm.lastTransaction.amount}.
            `);
    } else {
        alert(`Hi ${atm.name}.
            Balance ${atm.amount}`)
    }
}