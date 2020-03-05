$(document).foundation()

/*
obtenemos el evento de click de la opción del submenu lineup
*/
$('[data-toggle-dia]').click(function (ev){
    /* data-toggle-dia => toggleDia
    capturamos el elemento (id) que hicimos click */
    var panel = $(this).data('toggleDia');
    console.log(panel);
    /*function foundation, recibe como parameto la
    función selectTab y el id del elemento seleccionado,
    que activara el panel o tabs dentro del contenedor 
    #lineuptabs */
    $('#lineup-tabs').foundation('selectTab', panel);
})

/*ocultamos el menu lateral al dar click en un elemento*/
var $offCanvas = $('#offCanvas');
var $sticky = $('#sticky');
/*capturamos el elemento con el id offCanvas y se lo asignamos
la variable de igual nombre, y le asinamos una función al hacer click*/
$offCanvas.find('li').click(function(ev) {
    $offCanvas.foundation('close');
    setTimeout(function() {
        $sticky.css('left', '0px');
    }, 300);
});
