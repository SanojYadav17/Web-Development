let balance = 1000000000001;

function deposite(amount) {
    balance += amount;
    return balance;
}

function withdrow(amount) {
    if (amount <= balance) {
        balance -= amount;
        return balance;
    } else {
        console.log("Insufficient funds");
        return balance;
    }
}

function checkbalance() {
    return balance;
}

module.exports ={deposite, withdrow, checkbalance};