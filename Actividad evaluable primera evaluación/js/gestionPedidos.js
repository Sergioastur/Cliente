// La aplicación permitirá dar de alta, baja, modificar y consultar piezas de carpintería. 
function alta () {
    fechapedido.addEventListener("change", errorChk, false);
    function errorChk() {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        let fecha = $('#fechapedido').val();
        const fechaDate = new Date(fecha);
        
        console.log($('#procesado').is(":checked"))
        if (fechaDate.getTime() > hoy.getTime()) {
            $('#dateErr').removeClass('oculto');
            $('#submit').attr("disabled", "");
        } else {
            $('#dateErr').addClass('oculto');
            $('#submit').removeAttr("disabled", "");

        }
    }
    submit.addEventListener("click", guardar, false);

    function guardar() {
        
        const datos = {
            numPedido: $('#numpedido').val(),
            cliente: $('#cliente').val(),
            fecha: $('#fechapedido').val(),
            procesado: $('#procesado').is(":checked"),
            servido: $('#procesado').is(":checked")
        };

        localStorage.setItem($('#numpedido').val()+'(pedido)',JSON.stringify(datos));
    }
}

function baja() {
    numpedido.addEventListener("change", selectChk, false);
    submit.addEventListener("click", eliminar, false);
    submit.addEventListener("click", borrarPiezas, false);

    function selectChk() {
        if ($('#numpedido').val() == "") {
            $('#submit').attr("disabled", "");
        } else {
            $('#submit').removeAttr("disabled", "");
        }
    }

    function eliminar() {
        localStorage.removeItem($('#numpedido').val());
    }


    function borrarPiezas() {
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave && clave.endsWith('(pieza)')) {
                const pieza = JSON.parse(localStorage.getItem(clave));
            
                if (pieza && pieza.numPedido == $('#numpedido').val()) {
                    localStorage.removeItem(clave); 
                }
            }
        }
    }

    


}

function selectorPedido() {
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i); 
        if (clave && clave.endsWith('(pedido)')) {
            const option = $('<option></option>').attr('value', clave).text(clave);
            
            $('#numpedido').append(option);
        }
    }

}


function modificar() {
    numpedido.addEventListener("change", selectChk, false);
    submit.addEventListener("click", modif, false);

    function selectChk() {
        if ($('#numpedido').val() == "") {
            $('#mod').attr("hidden", "");
        } else {
            const pedido = JSON.parse(localStorage.getItem($('#numpedido').val()));
            $('#mod').removeAttr("hidden", "");
            document.getElementById("numpedido").value = pieza.numPedido;
            $('#cliente').attr("value", pedido.cliente);
            $('#fechapedido').attr("value", pedido.fechapedido);
            
            if (pedido.procesado) {
                $('#procesado').attr("checked", "");
            } else {
                $('#procesado').removeAttr("checked", "");
            }
            // TODO Terminar
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