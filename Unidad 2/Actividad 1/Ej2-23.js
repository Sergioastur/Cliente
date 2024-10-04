function ejercicio() {
    /*
        Calcula cuantos números pares hay entre dos introducidos
    */
   let num1 = prompt("Numero 1: ");
   num1 = Number(num1);
   let num2 = prompt("Numero 2: ");
   num2 = Number(num2);

   let mayor, menor;
   if (num1>num2) {
    mayor = num1;
    menor = num2;
   } else {
    mayor = num2;
    menor = num1;
   }

   let count = 0;

   for (let i = menor; i<mayor; i++) {
        if (i%2 == 0) {
            count++;
        }
   }

   document.write("Hay ", count, " pares");
}