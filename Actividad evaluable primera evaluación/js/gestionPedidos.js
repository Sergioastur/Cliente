// La aplicación permitirá dar de alta, baja, modificar y consultar piezas de carpintería. 
function alta() {
    fechapedido.addEventListener("change", errorChk, false);
    function errorChk() {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        let fecha = $('#fechapedido').val();
        const fechaDate = new Date(fecha);
        fechaDate.setHours(0, 0, 0, 0);

        console.log(fechaDate.getTime());
        console.log(hoy.getTime());
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
        if ($('#numpedido').val()!="" && $('#cliente').val()!="") {
        const datos = {
            numPedido: $('#numpedido').val(),
            cliente: $('#cliente').val(),
            fecha: $('#fechapedido').val(),
            procesado: $('#procesado').is(":checked"),
            servido: $('#procesado').is(":checked")
        };

        localStorage.setItem($('#numpedido').val() + '(pedido)', JSON.stringify(datos));
        } else {
            alert("RELLENE LOS CAMPOS OBLIGATORIOS");
        }
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
            alert("SE BORRARAN TODAS LAS PIEZAS ASOCIADAS");
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
    const seleccion = $('<option></option>').attr('value', "").text("Seleccionar pedido:");
        $('#numpedido').append(seleccion);
    for (let i = 0; i < localStorage.length; i++) {
         console.log(localStorage.key(i));
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
            console.log(pedido.numPedido);
            //document.getElementById("numpedido").value = pedido.numPedido;
            $('#cliente').attr("value", pedido.cliente);
            $('#fechapedido').attr("value", pedido.fecha);

            if (pedido.procesado) {
                $('#procesado').attr("checked", "");
            } else {
                $('#procesado').removeAttr("checked", "");
            }

            if (pedido.servido) {
                $('#servido').attr("checked", "");
            } else {
                $('#servido').removeAttr("checked", "");
            }

        }
    }

    fechapedido.addEventListener("change", errorChk, false);
    function errorChk() {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        let fecha = $('#fechapedido').val();
        const fechaDate = new Date(fecha);
        fechaDate.setHours(0, 0, 0, 0);

        console.log($('#procesado').is(":checked"))
        if (fechaDate.getTime() > hoy.getTime()) {
            $('#dateErr').removeAttr("disabled","");
            $('#submit').attr("disabled", "");
        } else {
            $('#dateErr').attr("disabled","");
            $('#submit').removeAttr("disabled", "");

        }
    }

    function modif() {
        const pedido = JSON.parse(localStorage.getItem($('#numpedido').val()));
        pedido.numPedido = $('#numpedido').val();
        pedido.cliente = $('#cliente').val();
        pedido.fecha = $('#fechapedido').val();
        pedido.procesado = $('#procesado').is(":checked");
        pedido.servido = $('#servido').is(":checked");
        localStorage.setItem($('#numpedido').val() , JSON.stringify(pedido));

    }

    
}

function detalle() {
    numpedido.addEventListener("change", tabla, false);

    

    function tabla() {
        $("#resultado").html("");
        let tablaHTML = "<table border='1'> <tr><th>Num. Pieza</th><th>Largo</th><th>Ancho</th><th>Grosor</th><th>Color</th><th>Superficie</th><th>Volumen</th></tr>";
        /* document.writeln("<table> <tr><th>Num. Pieza</th><th>Largo</th><th>Ancho</th><th>Grosor</th><th>Color</th><th>Superficie</th><th>Volumen</th></tr>"); */
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave && clave.endsWith('(pieza)')) {
                const pieza = JSON.parse(localStorage.getItem(clave));
    
                if (pieza && pieza.numPedido == $('#numpedido').val()) {
                    
                    /* document.writeln("<tr><td>"+pieza.numPedido+"</td>"+"<td>"+pieza.largo+"</td>"+"<td>"+pieza.ancho+"</td>"+"<td>"+pieza.grosor+"</td>"+"<td>"+pieza.color+"</td>"+"<td>"+superficie(parseInt(pieza.largo),parseInt(pieza.ancho))+"</td>"+"<td>"+volumen(parseInt(pieza.largo),parseInt(pieza.ancho),parseInt(pieza.grosor))+"</td></tr>"); */
                    tablaHTML += `<tr>
                        <td>${pieza.numPieza}</td>
                        <td>${pieza.largo}</td>
                        <td>${pieza.ancho}</td>
                        <td>${pieza.grosor}</td>
                        <td>${pieza.color}</td>
                        <td>${superficie(parseInt(pieza.largo), parseInt(pieza.ancho))}</td>
                        <td>${volumen(parseInt(pieza.largo), parseInt(pieza.ancho), parseInt(pieza.grosor))}</td>
                    </tr>`;
                }
            }
        }
        /* document.writeln("</table>"); */
        tablaHTML += "</table>";
        $("#resultado").html(tablaHTML);
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
    numpedido.addEventListener("change", tabla, false);
    
    function tabla() {
        $("#resultado").html("");
        if ($('#numpedido').val() != "") {
                const pedido = JSON.parse(localStorage.getItem($('#numpedido').val()));
                /* document.write("<table  border='1'> <tr><th>Num. Pedido</th><th>Cliente</th><th>Fecha</th><th>Procesado</th><th>Servido</th></tr>");
                document.write("<tr><td>"+pedido.numPedido+"</td>"+"<td>"+pedido.cliente+"</td>"+"<td>"+pedido.fecha+"</td>"+"<td>"+pedido.procesado+"</td><td>"+pedido.servido+"</td></tr>");
                document.write("</table>"); */
                let tablaHTML = `
                <table border="1">
                    <tr>
                        <th>Num. Pedido</th>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Procesado</th>
                        <th>Servido</th>
                    </tr>
                    <tr>
                        <td>${pedido.numPedido}</td>
                        <td>${pedido.cliente}</td>
                        <td>${pedido.fecha}</td>
                        <td>${pedido.procesado}</td>
                        <td>${pedido.servido}</td>
                    </tr>
                </table>
            `
            $("#resultado").html(tablaHTML);
        }
    }
}

function inicio() {
    window.location.href = "../index.html";
}