function ejercicio() {
    /*
        Realiza un ejercicio que haga lo siguiente:
            1. Se teclearán dos números enteros por pantalla hasta que los dos sean menores que 50.
            2. El más pequeño se irá incrementando de 5 en 5 y el más grande se decrementará de 2 en 2, se
            irán imprimiendo a la vez que se van generando. El programa terminará cuando los valores
            se crucen
    */

    let num1 = 51;
    let num2 = 51;

    while (num1>50 && num2>50) {
        num1 = prompt("Numero 1 (<50):");
        num2 = prompt("Numero 2 (<50):");
    }

    while (num1 != num2) {
        if (num1>num2) {
            num1-=2;
            num2+=5;
        }
    }
}