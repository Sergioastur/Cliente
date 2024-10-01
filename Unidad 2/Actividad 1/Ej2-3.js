function ejercicio() {
    /*
        Haz un programa que sirva para dividir dos números. ¿Qué sucede si en lugar de dividir dos
        números, intentamos dividir dos textos? ¿Qué sucede si el divisor es el número 0? ¿Y si no
        introducimos nada?
    */


    let num1 = 4;
    let num2 = 2;
    document.write(num1/num2);
    document.write("<br>");

     num1 = 4;
     num2 = 0;
    document.write(num1/num2);
    document.write("<br>");

    let txt1 = "texto1";
    let txt2 = "texto2";
    document.write(txt1/txt2);
    document.write("<br>");

    num1 = 4;
    try {
        document.write(num1/null);
        document.write("<br>");
    } catch (err) {
        
    }

}