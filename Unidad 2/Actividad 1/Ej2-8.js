function ejercicio() {
    /*
        Haz un programa que funcione de la manera siguiente:
        • Nos pida nuestro nombre.
        • Nos pida nuestro primer apellido.
        • Nos pida en que población vivimos.
        • Al final nos presente:
        =======================
        Hola “nombre y apellido”
        Adiós habitante de “Población”
        ======================
    */

    let nombre = prompt("Nombre: ");
    let apellido = prompt("Primer apellido: ");
    let poblacion = prompt("Población: ");

    document.write("=======================");
    document.write("<br>");
    document.write("Hola "+nombre+" "+apellido);
    document.write("<br>");
    document.write("Adiós habitante de "+poblacion);
    document.write("<br>");
    document.write("=======================");
}