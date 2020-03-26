am4core.ready(function() {

	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("population-03", am4charts.PieChart3D);

	chart.hiddenState.properties.opacity = 0;

	chart.data = [];

	chart.innerRadius = am4core.percent(40);
	chart.depth = 120;

	chart.legend = new am4charts.Legend();

	var series = chart.series.push(new am4charts.PieSeries3D());
	series.dataFields.value = "value";
	series.dataFields.depthValue = "value";
	series.dataFields.category = "religiao";
	series.slices.template.cornerRadius = 5;
	series.labels.template.disabled = true;
	series.colors.step = 3;

});