function ejercicio() {
    /*
        Hacer un programa que pida un número, luego pide a tu compañero que intente adivinarlo. Tienes
        5 oportunidades. Utiliza la sentencia break para salir del bucle si lo adivina antes.
    */
   let num = prompt("Numero: ");

   for (i = 5; i>=0; i--) {
        let adivina = prompt("Adivina el numero te quedan "+ i +" intentos:");
        if (num == adivina) {
            document.write("Correcto");
            break;
        } 
   }
}