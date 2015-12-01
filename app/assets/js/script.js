  window.onload = function(){

  	$.ajax({
  		url: 'https://galvanize-eats-api.herokuapp.com/menu',
  		type: 'GET',
  		dataType: 'json'
  	})

	$('#deliver').on('click', function(){
		$.post("https://galvanize-eats-api.herokuapp.com/orders", {
			name: $('#name').val(),
			price: total,
			address: $('#address').val(),
			phoneNumber: $('#phoneNumber').val()
		});
		window.location.replace('pages/orders.html');
	});
}