function ejercicio() {
    /*
        Supongamos que nos preguntan qué porcentaje de hombres y qué porcentaje de mujeres hay un
        salón de clases. Lo primero que tenemos que hacer es preguntar el total de personas que hay,
        luego hacer un ciclo que en cada iteración pregunte el sexo de cada alumno. En base a esos datos se
        calculan los porcentajes.
    */
    let numPersonas = prompt("Cuantas personas hay en clase: ");
    let h = 0, m = 0;
    for (i = 0; i<numPersonas; i++) {
        let genero = prompt("Genero del alumno (h/m)"+ (i+1) +": ");
        if (genero == "h") {
            h++;
        } else if (genero == "m") {
            m++;
        } else {
            i--;
        }

    }

    let pHombres = (h/numPersonas)*100;
    let pMujeres = (m/numPersonas)*100;

    document.write("El "+pHombres+"% son hombres <br>");
    document.write("El "+pMujeres+"% son mujeres");
    
}