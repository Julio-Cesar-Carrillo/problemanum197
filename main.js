function procesarPalabra(){
    // Recogemos la palabra a desencriptar
    var palabra = document.getElementById('palabra').value;
    // Creamos dos variables vacias
    var impar = "";
    var par = "";
    // Creamos un contador
    var contador=0;
    // Recogemos los dos resultados finales
    var primero = document.getElementById('resultado');
    var segundo = document.getElementById('resultado2');
    // Mediante un for recoremos la palabra a desencriptar
    for (i = 0; i < palabra.length; i = i+1) {
        // Creamos un array para cada palabra
        var letraActual = palabra[i];
        // Incrementamos el contador
        contador = contador+1;
        // Comparamos si el número del contador es par o no
        if (contador % 2 === 0) {
            // Metemos la letra que se encuentre en el la posicion del array par
            par = letraActual+par;
        }
        else{
            // juntamos la letra letra actual por la que se encuentra en el array
            impar = impar+letraActual;
        }
    }
    // Juntamos las dos palabras
    var nueva = impar + par;
    // Recogemos el segundo resultado y lo metemos en la constante frase
    primero.value = nueva;
    const frase = nueva;
    // Creamos una constantes con las vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    // Mediante un array separamos cada letra de la palabra
    const frase_array = frase.split('');
    // Creamos un variable y un array vacio
    let resu = '';
    let reverso = [];
    // Mediante un foreach recoremos cada palabra dentro del array
    frase_array.forEach((letra) => {
        // Comprobamos que la letra no sea una vocal, tambien transformamos la letra en minusculas
        if (!vocales.includes(letra.toLowerCase())) {
            // Metemos en un array la letra
            reverso.push(letra);
        } else {
            // Si es una vocal la mandamos al final del array sin ningun tipo de separacion
            resu += reverso.reverse().join('');
            // Metemos la vocal en la variable resu
            resu += letra;
            // Limpiamos el array para la siguiente letra
            reverso = [];
        }
    })
    // Comprovamos que reverso no este vacio 
    if (reverso != []) {
        // Si no esta vacio la letra se ira al inicio de todo
        resu += reverso.reverse().join('')
    }
    segundo.value = resu;
}