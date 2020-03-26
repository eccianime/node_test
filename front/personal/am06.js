am4core.ready(function() {

	am4core.useTheme(am4themes_animated);
	var chart = am4core.create("clima-01", am4charts.XYChart);

	chart.data = []

	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.minGridDistance = 50;

	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

	var series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueY = "min";
	series.dataFields.dateX = "date";
	series.strokeWidth = 2;
	series.stroke = am4core.color("#3333cc");
	series.minBulletDistance = 10;
	series.tooltipText = "[bold]Max:[/] {max}°C\n[bold]Min:[/] {min}°C";
	series.tooltip.pointerOrientation = "vertical";

	var series2 = chart.series.push(new am4charts.LineSeries());
	series2.dataFields.valueY = "max";
	series2.dataFields.dateX = "date";
	series2.strokeWidth = 2;
	series2.stroke = series.stroke;
	series2.stroke = am4core.color("#cc3333");

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.xAxis = dateAxis;
}); 