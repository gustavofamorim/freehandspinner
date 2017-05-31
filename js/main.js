
$(window).ready(function(){

	$("#draggable").draggable({
		containment:"body",
		start: function(){
			console.log("start");
		},
		drag: function(event, ui){
			$("#screen").css({
				"left": ui.position.left - 114,
				"top": ui.position.top + 187
			});
		}
	});


	$("#screen").propeller({
		inertia: 0.99,
		speed: 0
	});

});
