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