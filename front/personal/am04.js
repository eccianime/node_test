am4core.ready(function() {

	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("population-02", am4charts.PieChart3D);

	chart.hiddenState.properties.opacity = 0;

	chart.legend = new am4charts.Legend();

	chart.data = [];

	var series = chart.series.push(new am4charts.PieSeries3D());
	series.dataFields.value = "%";
	series.dataFields.category = "genero";
	series.ticks.template.disabled = true;
	series.slices.template.tooltipText = "";
	series.labels.template.disabled = true;
	series.slices.template.propertyFields.fill = "color";

});