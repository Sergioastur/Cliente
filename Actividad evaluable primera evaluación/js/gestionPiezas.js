function altas() {
    console.log($('#color').val());
    if ($('#color').val() == "natural") {
        $('#noNatural').addClass('oculto');
    }
}