function ejercicio() {
    /*
        Elaborar un algoritmo que permita convertir de grados Fahrenheit a Centígrados, utilizando la
        siguiente fórmula: C = 5 / 9 (F – 32). Mostrar los grados Centígrados y los Fahrenheit obtenidos.
    */

    let f = prompt("Grados Fahrenheit:");
    let c = 5/9*(f - 32);

    document.write(f+"ºF = "+c+"ºC");
    
}