function ejercicio() {
    /*
        Haz un programa para calcular la longitud de una circunferencia y el área del círculo 
        correspondiente.
    */

    let radio = prompt("Radio: ");
    let circunferencia = 2*Math.PI*radio;
    let area = Math.PI*radio**2;

    document.write("Circunferencia: "+circunferencia);
    document.write("<br>");
    document.write("Area: "+area);
}