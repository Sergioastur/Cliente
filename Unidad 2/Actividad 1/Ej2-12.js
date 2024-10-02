function ejercicio() { 

    /*
        Crear un programa que lea un número entero y a partir de él cree un cuadrado de asteriscos con ese
        tamaño.
    */

    let num = prompt("Tamaño: ");

    for (i=0; i<num; i++) {
       for (f=0; f<num; f++) {
            document.write(" * ");
        }
        document.write("<br>");
        
    }
}
