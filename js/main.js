
$("#draggable").draggable({
	containment:"body",
	drag: function(event, ui){
		$("#screen").css({
			"left": ui.position.left,
			"top": ui.position.top
		});
	}
});

$(window).ready(function(){
	$("#screen").propeller({
		inertia: 0.99,
		speed: 0
	});
});
