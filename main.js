function mostrarMayuscula() {
    var datos = document.getElementById('datos').value;
    datos = convertir(datos.toLowerCase());
console.log(datos);
document.getElementById('resultado').innerHTML = datos;
}

function convertir(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* hint: convert all to uppercase
function convertirTodo(string){
    return string.toUpperCase();
}
*/
