am4core.ready(function() {

	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("population-01", am4charts.XYChart);

	chart.data = [];

	chart.numberFormatter.numberFormat = "#.#s";

	var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "edade";
	categoryAxis.renderer.grid.template.location = 0;
	categoryAxis.renderer.inversed = true;

	var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
	valueAxis.extraMin = 0.1;
	valueAxis.extraMax = 0.1;
	valueAxis.renderer.minGridDistance = 40;
	valueAxis.renderer.ticks.template.length = 5;
	valueAxis.renderer.ticks.template.disabled = false;
	valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
	valueAxis.renderer.labels.template.adapter.add("text", function(text) {
	  return text == "Homem" || text == "Mulher" ? text : text + "%";
	})

	var male = chart.series.push(new am4charts.ColumnSeries());
	male.dataFields.valueX = "homem";
	male.dataFields.categoryY = "edade";
	male.clustered = false;

	var maleLabel = male.bullets.push(new am4charts.LabelBullet());
	maleLabel.label.text = "{valueX}%";
	maleLabel.label.hideOversized = false;
	maleLabel.label.truncate = false;
	maleLabel.label.horizontalCenter = "right";
	maleLabel.label.dx = -10;

	var female = chart.series.push(new am4charts.ColumnSeries());
	female.dataFields.valueX = "mulher";
	female.dataFields.categoryY = "edade";
	female.clustered = false;

	var femaleLabel = female.bullets.push(new am4charts.LabelBullet());
	femaleLabel.label.text = "{valueX}%";
	femaleLabel.label.hideOversized = false;
	femaleLabel.label.truncate = false;
	femaleLabel.label.horizontalCenter = "left";
	femaleLabel.label.dx = 10;

	var maleRange = valueAxis.axisRanges.create();
	maleRange.value = -10;
	maleRange.endValue = 0;
	maleRange.label.text = "Homem";
	maleRange.label.fill = chart.colors.list[0];
	maleRange.label.dy = 20;
	maleRange.label.fontWeight = '600';
	maleRange.grid.strokeOpacity = 1;
	maleRange.grid.stroke = male.stroke;

	var femaleRange = valueAxis.axisRanges.create();
	femaleRange.value = 0;
	femaleRange.endValue = 10;
	femaleRange.label.text = "Mulher";
	femaleRange.label.fill = chart.colors.list[1];
	femaleRange.label.dy = 20;
	femaleRange.label.fontWeight = '600';
	femaleRange.grid.strokeOpacity = 1;
	femaleRange.grid.stroke = female.stroke;
});