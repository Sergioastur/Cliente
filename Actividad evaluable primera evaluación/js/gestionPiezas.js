

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
    
}