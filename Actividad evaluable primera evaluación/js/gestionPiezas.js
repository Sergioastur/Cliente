

function altas() {
    let color = document.getElementById("color");
    color.addEventListener("click", ocultarColor, false);
    console.log($('#color').val());
    /* function ocultar() {
        if ($('#color').val() == "natural") {
            $('#noNatural').addClass('oculto');
        } else {
            $('#noNatural').removeClass('oculto');
        }
    } */

    submit.addEventListener("click", guardar, false);

    function guardar() {
        
        const datos = {
            numPedido: $('#numpedido').val(),
            numPieza: $('#numpieza').val(),
            largo: $('#largo').val(),
            ancho: $('#ancho').val(),
            grosor: $('#grosor').val(),
            color: $('#color').val(),
            ambasCaras: $('#ambascaras').is(":checked"),
            cortada: $('input[name="cortada"]').val()
        };

        localStorage.setItem($('#numpieza').val()+'(pieza)',JSON.stringify(datos));
    }
    
    numpieza.addEventListener("change", piezaChk, false);

    function piezaChk() {
        let encontrado = false;
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            
            
            if (clave == ($('#numpieza').val()+"(pieza)")) {
                encontrado = true;
                break;  
            }
        }

        if (!Number.isInteger(parseFloat($('#numpieza').val())) || encontrado) {
            $('#piezaErr').removeClass('oculto');
            $('#submit').attr("disabled", "");
        } else {
            $('#piezaErr').addClass('oculto');
            $('#submit').removeAttr("disabled", "");
        }
    }
}




function selector() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i); 
        if (clave && clave.endsWith('(pedido)')) {
            const option = $('<option></option>').attr('value', clave).text(clave);
            
            $('#numpedido').append(option);
        }
    }

}

function selectorPieza() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i); 
        if (clave && clave.endsWith('(pieza)')) {
            const option = $('<option></option>').attr('value', clave).text(clave);
            
            $('#numpieza').append(option);
        }
    }
}

function baja() {
    numpieza.addEventListener("change", selectChk, false);
    submit.addEventListener("click", eliminar, false);

    function selectChk() {
        if ($('#numpieza').val() == "") {
            $('#submit').attr("disabled", "");
        } else {
            $('#submit').removeAttr("disabled", "");
        }
    }

    function eliminar() {
        localStorage.removeItem($('#numpieza').val());
    }
}

function ocultarColor() {
    if ($('#color').val() == "natural") {
        $('#noNatural').attr("hidden", "");
    } else {
        $('#noNatural').removeAttr("hidden", "");
    }
}


function modificar() {
    numpieza.addEventListener("change", selectChk, false);
    numpieza.addEventListener("change", ocultarColor, false);
    color.addEventListener("change", ocultarColor, false);
    submit.addEventListener("click", modif, false);

    function selectChk() {
        if ($('#numpieza').val() == "") {
            $('#mod').attr("hidden", "");
        } else {
            const pieza = JSON.parse(localStorage.getItem($('#numpieza').val()));
            $('#mod').removeAttr("hidden", "");
            document.getElementById("numpedido").value = pieza.numPedido;
            $('#largo').attr("value", pieza.largo);
            $('#ancho').attr("value", pieza.ancho);
            $('#grosor').attr("value", pieza.grosor);
            document.getElementById("color").value = pieza.color;
            if (pieza.ambasCaras) {
                $('#ambascaras').attr("checked", "");
            } else {
                $('#ambascaras').removeAttr("checked", "");
            }
            if (pieza.cortada == "Si") {
                $('#si').attr("checked", "");
                $('#no').removeAttr("checked", "");
            } else {
                $('#no').attr("checked", "");
                $('#si').removeAttr("checked", "");
            }

        }
    }

    function modif() {
        const pieza = JSON.parse(localStorage.getItem($('#numpieza').val()));
        pieza.numPedido = $('#numpedido').val();
        pieza.largo = $('#largo').val();
        pieza.ancho = $('#ancho').val();
        pieza.grosor = $('#grosor').val();
        pieza.color = $('#color').val();
        pieza.ambasCaras = $('#ambascaras').is(":checked");
        pieza.cortada = $('input[name="cortada"]:checked').val();
        localStorage.setItem($('#numpieza').val() , JSON.stringify(pieza));

    }

    
}

function superficie(a,b) {
    
    let resul = a*b; 
    return resul;
}

function volumen(a,b,c) {
    
    let resul = a*b*c;
    return resul;
}

function consulta() {
    numpieza.addEventListener("change", tabla, false);

    function tabla() {
        const pieza = JSON.parse(localStorage.getItem($('#numpieza').val()));
        document.write("<table> <tr><th>Num. Pieza</th><th>Largo</th><th>Ancho</th><th>Grosor</th><th>Color</th><th>Superficie</th><th>Volumen</th></tr>");
        document.write("<tr><td>"+pieza.numPedido+"</td>"+"<td>"+pieza.largo+"</td>"+"<td>"+pieza.ancho+"</td>"+"<td>"+pieza.grosor+"</td>"+"<td>"+pieza.color+"</td>"+"<td>"+superficie(parseInt(pieza.largo),parseInt(pieza.ancho))+"</td>"+"<td>"+volumen(parseInt(pieza.largo),parseInt(pieza.ancho),parseInt(pieza.grosor))+"</td></tr>");
        document.write("</table>");
    }
    
}