

function altas() {
    let color = document.getElementById("color");
    color.addEventListener("click", ocultar, false);
    console.log($('#color').val());
    function ocultar() {
        if ($('#color').val() == "natural") {
            $('#noNatural').addClass('oculto');
        } else {
            $('#noNatural').removeClass('oculto');
        }
    }

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
            servido: $('input[name="cortada"]').val()
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