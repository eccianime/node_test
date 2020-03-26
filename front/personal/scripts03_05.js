$(function() {
	var charts = am4core.registry.baseSprites;

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/pop/dist",
		success: function(data) {
			charts[0].data = data.data;
		}
	});

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/pop/genero",
		success: function(data) {
			data.data[0].color = "#3333cc";
			data.data[1].color = "#cc3333";
			charts[1].data = data.data;
		}
	});

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/pop/religiao",
		success: function(data) {
			charts[2].data = data.data;
		}
	});
});