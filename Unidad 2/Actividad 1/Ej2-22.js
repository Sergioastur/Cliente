function ejercicio() {
    /*
        Calcula la media de una serie de números introducidos por teclado.
    */
   let sum = 0;
   let count = 0;
   let num = 0;

   do {
    num = prompt("Numero (no numero para terminar):");
    num = Number(num);

    if (isNaN(num)) {
        break;
    } else {
        sum = sum + num;
        count++;
    }
    
   } while(!isNaN(num));

   let media = sum/count;
   document.write("La media es "+media);
}