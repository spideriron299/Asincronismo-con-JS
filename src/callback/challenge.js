const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fecthData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechnge = function (event) {
        //Por que 4?, hay 4 tipos de elementos en el readyState
        //0 , no se ah inicializado
        //1, loading
        //2, ya se ejecuto
        //3, interactuando (descargando)
        //4, Completado
        if(xhttp.reayState === 4) {
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fecthData(`${API}/products`, function(error1,data1){
    if(error1) return console.error(error1);
    fecthData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fecthData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});