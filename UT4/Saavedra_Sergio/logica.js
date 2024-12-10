class Vuelo {
    constructor(codigo, numPlazas, impBillete) {
      this.codigo = codigo;
      this.numPlazas = numPlazas;
      this.impBillete = impBillete;
    }

    set cod(newCod) {
        this.codigo = newCod;
    }

    set nPlz (newNPlz) {
        this.numPlazas = newNPlz;
    }

    set imp (newImp) {
        this.impBillete = newImp;
    }

    get calculo() {
        return this.numPlazas*this.impBillete;
    }
}

class VueloMuyRentable {
    constructor(codigoVuelo, ingreEstimado) {
        this.codigoVuelo = codigoVuelo;
        this.ingreEstimado = ingreEstimado;
    }

    get ingreso() {
        return this.ingreEstimado;
    }
}



function limpiar() {
    $("#resultado").html(""); 
}

function compValor() {
    importe.addEventListener("change", checkI, false);
    plazas.addEventListener("change", checkP, false);
    
    function checkP() {
        if ($('#plazas').val()<1) {
            document.getElementById("plazas").value = "1"; 
            alert("NO SE PERMITEN VALORES MENOR QUE 1");
            
        }
    }

    function checkI() {
        if ($('#importe').val()<1) {
            document.getElementById("importe").value = "1"; 
            alert("NO SE PERMITEN VALORES MENOR QUE 1");
            
        }
    }
}

function comprobar() {
    if ($('#cod').val() != "" && $('#plazas').val() != "" && $('#importe').val() != "") {
        return true;
    } else {
        return false;
    }
}

function noExiste() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        if (clave == ($('#cod').val()+'(vuelo)')) {
            return false;
        }
    }

    return true;
} 

function existeMuyRentable() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        if (clave == ($('#cod').val()+'(vueloMuyRentable)')) {
            return true;
        }
    }

    return false;
} 

function add() {
    if (comprobar() && noExiste()) {
        const nuevoVuelo = new Vuelo($('#cod').val(),$('#plazas').val(),$('#importe').val());
        localStorage.setItem($('#cod').val()+'(vuelo)', JSON.stringify(nuevoVuelo));
        const ingreso = nuevoVuelo.calculo;
        if (ingreso>20000) {
            const nuevoVueloMuyRentable = new VueloMuyRentable($('#cod').val(),ingreso);
            localStorage.setItem($('#cod').val()+'(vueloMuyRentable)',JSON.stringify(nuevoVueloMuyRentable));
        }
    } else {
        alert("Faltan campos o ya existe el vuelo");
    }
   
}

function mod() {
    if (comprobar() && !noExiste()) {
        const modVuelo = new Vuelo($('#cod').val(),$('#plazas').val(),$('#importe').val());
        localStorage.setItem($('#cod').val()+'(vuelo)', JSON.stringify(modVuelo));
        const ingreso = modVuelo.calculo;
        if (existeMuyRentable()) {
            if(ingreso<=20000) {
                localStorage.removeItem($('#cod').val()+'(vueloMuyRentable)');
            } else {
                const nuevoVueloMuyRentable = new VueloMuyRentable($('#cod').val(),ingreso);
                localStorage.setItem($('#cod').val()+'(vueloMuyRentable)',JSON.stringify(nuevoVueloMuyRentable));
            }
        } else {
            if(ingreso>20000) {
                const nuevoVueloMuyRentable = new VueloMuyRentable($('#cod').val(),ingreso);
                localStorage.setItem($('#cod').val()+'(vueloMuyRentable)',JSON.stringify(nuevoVueloMuyRentable));
            }
        }

    } else {
        alert("Faltan campos o no existe el vuelo");
    }
}

function calc() {
    if($('#cod').val() != "") {
        $("#resultado").html("");
        const clave = $('#cod').val()+'(vuelo)';
        const vuelo =  JSON.parse(localStorage.getItem(clave));
        const ingreso = vuelo.numPlazas*vuelo.impBillete;
        switch (true) {
            case ingreso<10000:
                var categoria = "Poco Rentable";
            break;
            case ingreso>=10000 && ingreso<= 20000:
                var categoria = "Rentable";
            break;
            case ingreso> 20000:
                var categoria = "Muy Rentable";
            break;
        }
        
        let HTML = `<p><strong>Ingreso estimado: </strong>${ingreso} (${categoria})</p>`;
        $("#resultado").html(HTML);
    }
}

function muyRentables() {
    $("#resultado").html("");
    let tablaHTML = "<table border='1'> <tr><th>Código de vuelo</th><th>Ingreso estimado</th></tr>";
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        if (clave && clave.endsWith('(vueloMuyRentable)')) {
            const vuelo = JSON.parse(localStorage.getItem(clave));
            tablaHTML += `<tr>
                        <td>${vuelo.codigoVuelo}</td>
                        <td>${vuelo.ingreEstimado}</td>
                    </tr>`;
        }
    }
    tablaHTML += "</table>";
    $("#resultado").html(tablaHTML);
}