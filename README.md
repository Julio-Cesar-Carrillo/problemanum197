# problemanum197
Ejercicio del problemanum197


ENCRIPTACION 2 A 1 (x'' -> x')
Inicializamos un array con las vocales
Transformamos el mensaje encriptado a un array
Inicializamos dos arrays vacios para guardar los caracteres pares e impares
Recorremos el array y vamos almacenando los valores invertidos secuencialmente
Invertimos los valores para que se pongan 
Transformamos y fusionamos los dos arrays en un unico string

ENCRIPTACION 1 A ORIGINAL (x' -> x)
Inicializamos dos arrays
Verificamos si el input de msge1 (x') esta vacia
Recorremos el string msge1 (x')
    Comprobamos si el caracter es una vocal o no
    Recorremos el array msge1 (x') hasta encontrar una vocal, si lo encuentra no lo almacenando
        En el caso de que no encuentre una vocal al final del array, se sale del while.
     Invertimos los caracteres especulares para que se posicionen correctamente.
    Fusionamos los dos arrays en un unico
    Metemos en el array la vocal faltante
    Limpiamos el array para la siguiente cadena de texto
Transformamos el array en un string

x'': Aauirnedleiua nBo
x''->x' => AurelianoB uednia
x'->x => Aureliano Buendia

x'': E. .n.ualn cnhuag aMda  rle
x''->x' => E nul nugad rel aM ahcna...
x'->x => En un lugar de la Mancha...

x'': aueoi
x''->x' => aeiou
x'->x => aeiou

x'': BnodJo s, dBneam
x''->x' => BoJ ,dnameB sodn
x'->x => Bond, James Bond

x'': dnany
x''->x' => daynn
x'->x => danny