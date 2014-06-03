$(document).ready(function () {

	$('#loginForm #login').on('click', function (event) {
			clearErrors();
			$(this).parent().validateMe();   
	});

	function clearErrors () {
			$('div[id*=errorToolTip]').remove();
	}

});