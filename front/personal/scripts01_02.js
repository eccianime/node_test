$(function() {
	var charts = am4core.registry.baseSprites;

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/corona/cases",
		success: function(data) {
			charts[0].data = data.data;
		}
	});

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/corona/evol",
		success: function(data) {
			charts[1].data = data.data;
		}
	});
});