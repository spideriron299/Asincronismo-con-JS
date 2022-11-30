//Callback Funcion que recibe otra funcion.
function sum(num1,num2) {
    return num1 + num2
}

function calc(num1, nu2, callback) {
    return callback(num1, nu2);
};

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hola JavaScript');
}, 1000)

function grettin(name) {
    console.log(`Hola ${name}`)
}

setTimeout(grettin, 2000, 'Diego')