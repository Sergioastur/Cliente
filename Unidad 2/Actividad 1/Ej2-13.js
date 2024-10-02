function ejercicio() { 
    /*
        Realiza una aplicación que pida al usuario el precio de un producto sin el IVA y el IVA a aplicar,
        calculando el precio total a pagar.
    */

    let precio = prompt("Precio total sin IVA: ");
    let iva = prompt("IVA a aplicar: ");

    let calcularIVA = precio*(iva*0.01);
    precio = parseFloat(precio);
    //calcularIVA = parseFloat(calcularIVA);
    let resultado = precio+calcularIVA;

    document.write("Total a pagar: "+resultado);

}