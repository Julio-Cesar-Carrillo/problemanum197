function procesarPalabra(){
    var palabra = document.getElementById('palabra').value;
    // Creamos dos variables vacias
    var impar = "";
    var par = "";
    // Creamos un contador
    var contador=0;
    // 
    var primero = document.getElementById('resultado');
    var segundo = document.getElementById('resultado2');
    for (i = 0; i < palabra.length; i = i+1) {
        var letraActual = palabra[i];
        contador = contador+1;
        if (contador % 2 === 0) {
            par = letraActual+par;
        }
        else{
            impar = impar+letraActual;
        }
    }
    var nueva = impar + par;
    primero.value = nueva;
    const frase = nueva;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const frase_array = frase.split('');
    let resu = '';
    let reverso = [];
    frase_array.forEach((letra) => {
        if (!vocales.includes(letra.toLowerCase())) {
            reverso.push(letra);
        } else {
            resu += reverso.reverse().join('');
            resu += letra;
            reverso = [];
        }
    })
    if (reverso != []) {
        resu += reverso.reverse().join('')
    }
    segundo.value = resu;
}