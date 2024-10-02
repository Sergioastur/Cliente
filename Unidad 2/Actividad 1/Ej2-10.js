function ejercicio() {
    /*
        Realiza un ejercicio en el que se le pida al usuario un valor numérico y mediante un bucle while
        haga una cuenta atrás mostrándola mediante una ventana.
    */
   let num = prompt("Numero: ");
   

   while (num >= 0) {
    alert(num);
    num--;
   }
}