function ejercicio() {
    /*
        Crear un programa que escriba dos columnas de números, en la primera se colocan los números del
        1 al 100, en la segunda los números del 100 al 1, mediante un solo bucle
    */

        for (let i = 1; i <= 100; i++) {
            document.write(i + "\t" + (101 - i));
        }

}