$(function() {

		var btn_movil = $('#nav-mobile'),
				menu = $('#menu').find('ul');

		// Al dar click agregar/quitar clases que permiten el despliegue del menú
		btn_movil.on('click', function (e) {
				e.preventDefault();

				var el = $(this);

				el.toggleClass('nav-active');
				menu.toggleClass('open-menu');
		})

});

$('.popup').click(function (event) {
    event.preventDefault();
    window.open($(this).attr("href"), "popupWindow", "width=720,height=460,scrollbars=yes");
});
