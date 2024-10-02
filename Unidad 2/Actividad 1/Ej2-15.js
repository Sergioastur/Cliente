function ejercicio() {
    /*
        Hacer un programa utilizando la sentencia switch para que dada una nota numérica nos dé la nota
        en letra. (Por ejemplo, nota= 5 → Aprobado).
    */

    let nota = prompt("Nota: ");

    switch (true) {
        case nota<5:
            alert("Suspenso");
        break;
        
        case nota>=5 && nota<=6:
            alert("Aprobado");
        break;

        case nota>=7 && nota<=8:
            alert("Notable");
        break;

        case nota>=9:
            alert("Sobresaliente");
        break;
    }
}