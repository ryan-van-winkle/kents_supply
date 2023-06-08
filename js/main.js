const description = $('#product_description');

$('#carousel-example-1z').on('slide.bs.carousel', function () {
	var current_index= $(this).find('.active').index() + 1;
	
	switch (current_index) {
		case 0:
			description.text('1');
			break;
		case 1:
			description.text('2');
			break;
		case 2:
			description.text('3');
			break;
		case 3:
			description.text('4');
			break;
		case 4:
			description.text('5');
			break;
		case 5:
			description.text('6');
			break;
		case 6:
			description.text('7');
			break;
		case 7:
			description.text('8');
			break;
		default:
			console.log("Err: carousel item doesn't exist.");
	}
});