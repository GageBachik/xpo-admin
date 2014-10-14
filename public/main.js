$(document).on('ready', function() {
	$('#pass').on('click', function(e){
		e.preventDefault();
		var pass = $('#entered').val();
		$.post( "/auth", {pass: pass}, function( data ) {
		  if (data === 'success') {
		  	console.log(data);
		  	window.location.replace('/')
		  };
		});
	});


	$('#save').on('click', function(e){
		var item = $(this).parent().find('#name').text()
		var price = $(this).parent().find('#price').text()
		var data = {item: item, price:price}
		$.post( "/api/save", data, function( data ) {
		  if (data === 'success') {
		  	alert('Saved!')
		  }else{
		  	alert('FAILED TO SAVE!!')
		  }
		});
	});

});