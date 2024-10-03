function ejercicio() {
    /*
        Crear un programa que muestre un menú como este:
        Salir
        Sumatorio
        Factorial
        Tras mostrar el menú, el programa debe leer un número del 1 al tres si se elige 1, el programa acaba.
        Si se elige 2 se calcula el sumatorio del número, si se elige 3 se calcula el factorial (en ambos casos el
        programa pedirá escribir el número sobre el que se calcula el sumatorio o el factorial). Tras calcular
        el sumatorio o el factorial e indicar el resultado, el programa volverá a mostrar el menú y así
        sucesivamente.
    */
    do {
        let ele = prompt("Salir(1) \n Sumatorio(2) \n Factorial(3)");

        ele = parseInt(ele);

        switch (ele) {
            case 1:
                document.write("FIN PROGRAMA");
            break;
            case 2:
                let n = prompt("Numero sumatorio: ");
                n = parseInt(n);
                let s = (n*(n+1))/2;
                window.alert("El sumatorio de "+n+" es "+s);
            break;
            case 3:
                let nf = prompt("Numero factorial: ");
                nf = parseInt(nf);
                let f=1;
                if (nf == 0) {
                    f = 1;
                    
                } else {
                    for (i = 1; i<=nf; i++) {
                        f = f*i;
                    }
                }
                

                window.alert("El factorial de "+nf+" es "+f); 
            break;
            default:
                window.alert("Elija una opción valida");
            break;
        }
    } while(ele == 1);
}