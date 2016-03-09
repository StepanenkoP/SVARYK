$(document).ready(function() {

	$(".list li").click(function() {
		$(this).hide();
	});


	$(".add_item").click(function() {
		$(".list").append("<li class='new_item'>Элемент списка</li>");
		$(".new_item").click(function() {
			$(this).hide();
		});
	});

});