//Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos para mostrar solo aquellos 
//que sean mayores que un valor dado por el usuario.


function filtraMayorQue (arreglo,valor) {
    let cadena = "";
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]>valor){
            cadena += "|"+arreglo[i] +"|"
        }
    }
    console.log("Los elementos del arreglo ["+String(arreglo)+"] mayores a "+valor+" son "+cadena);
}

filtraMayorQue([1,2,5,6,7,8], 5);