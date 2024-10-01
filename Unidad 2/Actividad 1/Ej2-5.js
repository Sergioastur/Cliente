function ejercicio() {
    /*
        Haz un programa que nos pida un número, y nos muestre en una única pantalla, el doble, el triple 
        y el cuádruple del número que habíamos introducido (cada uno en una línea).
    */

    let numero = prompt("Numero: ");



    document.write("El doble: "+(numero*2));
    document.write("<br>");
    document.write("El triple: "+(numero*3));
    document.write("<br>");
    document.write("El cuadruple: "+(numero*4));
}