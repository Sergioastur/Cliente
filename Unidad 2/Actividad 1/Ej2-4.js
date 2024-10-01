function ejercicio() {
    /*
        Haz un programa que nos pregunte nuestro nombre, nuestra edad. El programa nos tiene que dar 
        como resultado los días que hemos vivido hasta el momento (suponiendo años de 365 días).
    */
   let nombre = prompt("Nombre: ");
   let edad = prompt("Edad: ");

   document.write(nombre+" ha vivido "+ (edad*365) +" dias");
}