function sum(num1,num2) {
    return num1 + num2 
}

function calc(num1, nu2, callback) {
    return callback(num1, nu2);
};

console.log(calc(2, 2, sum));